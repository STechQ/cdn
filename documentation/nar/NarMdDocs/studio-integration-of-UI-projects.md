---
id: studio-integration-of-UI-projects
title: Studio Integration Of UI Projects
excludeInSearch: true
---


**If a new project is to be carried out within NAR**, and if **you do not have an existing microUI project** and your application will only have UI pages, **you can create a UI project**. 

## **1.Create UI Project**
For more detailed information about **Create UI Project**, click <a href="https://docs.onplateau.com/Export/Uncompiled-Export/create-ui" target="_blank">See More</a>.

## **2.Installation UI Project On Bank Systems**

- For more detailed information about **Installation**, click <a href="https://stechq.github.io/cdn/documentation/nar/QUI_BANKA_KURULUM_22032023.docx" target="_blank">See More</a>.

:::info **Note**
For detailed information, you should reach out to the **BT- Sürüm ve Yazılım Konfigürasyon Yönetimi** at **score@isbank.com.tr**
:::


### **Sample UI Projects**
- **MIPINTRA**<br/>
    The application codes are in scoretfs, and the application is installed in the bank's OpenShift environment.<br/>
    For more detailed information about project, you should reach out to the **Burak Mert** at **Burak.Mert@softtech.com.tr**<br/>
    For more detailed information about **complicare-qui codes**, click <a href="https://scoretfs.isbank/ISBANK/MIPINTRA/_git/complicare-qui" target="_blank">application codes</a>.

- **kmby-quick**<br/>
 The application codes are in scoretfs, and the application is installed in the bank's OpenShift environment.<br/>
 For more detailed information about project, you should reach out to the **Begüm Akpınar** at **Begum.Akpinar@softtech.com.tr**<br/>
 For more detailed information about **kmby-quick codes**, <a href="https://scoretfs.isbank/ISBANK/LOANCUST/_git/kmby-quick" target="_blank">click application codes</a> or  <a href="https://stechq.github.io/cdn/documentation/nar/kmby-quick.zip" target="_blank">download application codes</a><br/>
 For more detailed information about **kmby-platform codes**, <a href="https://scoretfs.isbank/ISBANK/LOANCUST/_git/kmby-platform" target="_blank">click platform codes</a> or <a href="https://stechq.github.io/cdn/documentation/nar/kmby-platform.zip" target="_blank">download platform codes</a>.

 
## **3.Tasks To Be Done In The Studio App**

### **3.1.Create ui-\[ProjectName\] folder**
There should be a folder starting with **ui-[ProjectName]** at the root and pages are added to it. All pages must be within this folder. If you want to group the pages, you can create as many folders as desired within this folder. There is a nested folder creation structure.

**Example: ui-myProject**

<img src="https://stechq.github.io/cdn/documentation/nar/nar_create_ui.png" width="240" />

###  **3.2.Using NAR container services file in Studio**
Container Services File is a structure that enables communication between UI pages and the NAR shell. It is used to receive information from NAR or send information to NAR. 

**For example:**<br/>
1. Retrieve the **login user information** from NAR.<br/>
2. Retrieve the **customer information acted on** in the NAR.<br/>
3. Add **IAM token (authorization and ltpatoken) information** from NAR to the service header in service requests made from UI pages.<br/>
4. Add **consumer code information** from NAR to the service header in service requests made from UI pages.<br/>

- In Studio, add a **Container Services File** under **"UI Settings"**. 
- Open the <a href="https://stechq.github.io/cdn/documentation/nar/containerServices.ts" target="_blank">containerServices.ts</a> file with Notepad++ and add its content to the **Container Services File**.
- You can change the values in the **Container Services File** as you wish and simulate it.

    <img src="https://stechq.github.io/cdn/documentation/nar/nar_Container_Services_File.png" width="640" />



### **3.3.Using NAR css file in Studio**

- In Studio, add **Style File** under **"UI Settings"**.
- Open the <a href="https://stechq.github.io/cdn/documentation/nar/plateau_ui.css" target="_blank">plateau_ui.css</a> file with Notepad++ and add its content to the **Style File**.

    <img src="https://stechq.github.io/cdn/documentation/nar/nar_Style_File.png" width="640" />

###  **3.4.Using NAR component list in Studio**
  
- In Studio, add **Component List** under **"UI Settings"**.  
- Open the <a href="https://stechq.github.io/cdn/documentation/nar/componentList.ts" target="_blank">componentList.ts</a> file with Notepad++ and add its content to the **Component List**.

    <img src="https://stechq.github.io/cdn/documentation/nar/nar_Component_List.png" width="640" />

###  **3.5.Using NAR pipeline in Studio**

For more detailed information about pipeline, click <a href="https://docs.onplateau.com/UI-Screens/UI-Settings/pipeline" target="_blank">See More</a>.

- In Studio, add **Pipeline** under **"UI Settings"**.  
- Write the following code in the Pipeline **onBeforeRequest** event.
    ```ts
    declare var requestObject: IRequest;

    requestObject.headers["X-Consumer"] = quick.containerServices.extensions?.getHeaderConsumerCode();
    requestObject.headers["x-isb-client"] = quick.containerServices.extensions?.getHeader('','isbClient');
    requestObject.headers["x-rly-corr"] = quick.containerServices.extensions.getCorrelationId();
    requestObject.headers["Accept-Language"] = "tr-TR";

    quick.EM.trace("requestObject1")
    quick.EM.trace(requestObject);

    let changeConsumerCodeForKrediSorguEkranlari = quick.store.get('$changeConsumerCodeForKrediSorguEkranlari')
    if (changeConsumerCodeForKrediSorguEkranlari != null && changeConsumerCodeForKrediSorguEkranlari.consumerCode != null) {

        requestObject.headers["X-Consumer"] = requestObject.headers["X-Consumer"].replace("TANE.ID", changeConsumerCodeForKrediSorguEkranlari.consumerCode);
        quick.EM.trace("requestObject2");
        quick.EM.trace(requestObject);
    }

    let customConsumerCode = quick.store.get('$customConsumerCode');
    if(customConsumerCode != null && customConsumerCode != undefined && customConsumerCode != '') {
        requestObject.headers["X-Consumer"] = requestObject.headers["X-Consumer"].replace("TANE.ID", customConsumerCode);
    }

    let customScreenName = quick.store.get('$customScreenName');
    if(requestObject.headers["screenName"] !=null && customScreenName != null && customScreenName != ''){
        requestObject.headers["x-isb-client"] = requestObject.headers["x-isb-client"].replace("NarCmmnScr", customScreenName);
    }
    if(requestObject.headers["optionalBranchHeader"]){

    // optionalHeaders
    // optionalBranchHeader : {injectCustomer: true, onBehalfOfOrganizationUnitCode:1299}
    if(JSON.parse(requestObject.headers["optionalBranchHeader"]).injectCustomer){
    requestObject.headers["X-Customer"] = quick.containerServices.extensions?.getHeader('','customer');
    }

    // x-isb-client: {"branch-v1" : {"workstationName": "0330X098", "organizationUnitCode": 4299, "tellerId":3, "screenName":"musara"}}
    if(JSON.parse(requestObject.headers["optionalBranchHeader"]).onBehalfOfOrganizationUnitCode){
    requestObject.headers["X-Customer"] = quick.containerServices.extensions?.getHeader('','customer');
    var headerObj = JSON.parse(requestObject.headers["x-isb-client"]);
    headerObj["branch-v1" ]["onBehalfOfOrganizationUnitCode"] =JSON.parse(requestObject.headers["optionalBranchHeader"]).onBehalfOfOrganizationUnitCode;
    }

    // optionalHeadersEnd
    }
    ```
    
- Write the following code in the Pipeline **onAfterResponse** event.
    ```ts
    quick.store.set('$changeConsumerCodeForKrediSorguEkranlari','')
    quick.store.set('$customScreenName','')
    quick.store.set('$customConsumerCode','')
    ```
- In event tab, click "Add Custom Event". Add **onAfterErrorResponse** event and checked  **External Visible**. Write the following code in the Pipeline **onAfterErrorResponse** event.
    ```ts
    quick.store.set('$changeConsumerCodeForKrediSorguEkranlari','')
    quick.store.set('$customScreenName','')
    quick.store.set('$customConsumerCode','')
    ```

- You can simulate the **getHeaderConsumerCode, getHeader, and getCorrelationId** methods in the **Container Services File.**

    <img src="https://stechq.github.io/cdn/documentation/nar/nar_Container_Services_File_getHeader.png" width="640" />


<br/>

### **3.6.Using NAR Settings File in Studio**

- In Studio, add **Settings File** under **"UI Settings"**.
- Open the <a href="https://stechq.github.io/cdn/documentation/nar/settings.yaml" target="_blank">settings.yaml</a> file with Notepad++ and add its content to the **Settings File**.

    <img src="https://stechq.github.io/cdn/documentation/nar/nar_Settings_File.png" width="640" />


## **4.Uncompiled Export**

- When you are in the **ui** folder of your application, you can perform <a href="https://docs.onplateau.com/Export/Uncompiled-Export/using-uncompiledExport" target="_blank">Uncompiled Export</a>  by running the command **symphony-cli studio-sync**.



## **5.Menu and UI Address Definition Into The NAR**

- For menu, UI page and service definitions methods document, refer to the  <a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=248876546" target="_blank">**Plateau UI and Service Definitions Methods Analysis Document.**</a>   


- The NAR menu definition should be as follows.
 
    **quick://static/ui-[ProjectName]/myFirstPage.qjson** <br/>
    Example: quick://static/ui-myProject/myFirstPage.qjson <br/>

    If myFolder is created within the ui-myProject folder, it should be specified in the hierarchical folder structure as follows.<br/>
    Example: **quick://static/ui-myProject/myFolder/myFirsPage.qjson**

    <img src="https://stechq.github.io/cdn/documentation/nar/nar_myFirstPage.png" width="240"/>

   
- When defining the NAR domain address, **the key value for the UI pages** should be as follows.
 
    key : ui-[ProjectName]&x&ui  
    value : domainAdres

    Example:<br/>
    key : ui-myProject&x&ui<br/>
    value: https://domainAdres.com.tr/

:::info **Note**
For detailed information, you should reach out to the **Dijital Şube Platformu team** at **<DijitalSubePlatformu@softtech.com.tr>**
:::

### **5.1.Dijital Sube Platform team document addresses**

&nbsp;<a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=248876546" target="_blank">**Nar - Plateau UI and Service Definitions Methods Analysis Document.**</a>

&nbsp;<a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=540646991" target="_blank">**Nar - Methods Transmitted Through the Shell**</a>

&nbsp;<a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=516661024" target="_blank">**Nar - Plateau Originated Errors and Solutions**</a>

&nbsp;<a href="https://jira.isbank/confluence/display/KEGP/Nar+-+Quick+Header" target="_blank">**Nar - Plateau Header**</a>




