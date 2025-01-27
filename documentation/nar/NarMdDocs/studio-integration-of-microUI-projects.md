---
id: studio-integration-of-microUI-projects
title: Studio Integration Of microUI Projects
excludeInSearch: true
---


**If you have an existing microUI project**, changes that need to be made in the new use of Studio for microUI projects as follow:

## **1.Create microUI Project**

For more detailed information about create microUI project, click <a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=329777614" target="_blank">See More</a>.

For **videos** about create microUI project, click <a href="https://jira.isbank/confluence/pages/viewpageattachments.action?pageId=528681368" target="_blank">See More</a>.

## **2.Tasks To Be Done In The Studio App**

### **2.1.Creating a module**

- Using **New Module** in Studio, a module is created that expresses the name of your application. 

    **Example:** BOVApp
    
- Fill in the **Module Url Prefix** field while creating the module. For example, **/narMicroUI/MODUL_PREFIX_NAME/**. You should give **microUI application name** to the MODUL_PREFIX_NAME part.

    **Example:** /narMicroUI/suggestion-management/
    
- Upload the application pages under the module and <a href="https://docs.onplateau.com/Getting-Started/how-to-transfer-to-plateau-studio" target="_blank">transfer app to studio.</a>.
  
  
    <img src="https://stechq.github.io/cdn/documentation/studio/CreateModuleWithPrefix.png" />

###  **2.2.Using NAR container services file in Studio**

- In Studio, add a **Container Services File** under **"UI Settings"**. 
- Open the <a href="https://stechq.github.io/cdn/documentation/nar/containerServices.ts" target="_blank">containerServices.ts</a> file with Notepad++ and add its content to the **Container Services File**.
- You can change the values in the **Container Services File** as you wish and simulate it.

    <img src="https://stechq.github.io/cdn/documentation/nar/nar_Container_Services_File.png" width="640" />


### **2.3.Using NAR css file in Studio**

- In Studio, add **Style File** under **"UI Settings"**.
- Open the <a href="https://stechq.github.io/cdn/documentation/nar/plateau_ui.css" target="_blank">plateau_ui.css</a> file with Notepad++ and add its content to the **Style File**.

    <img src="https://stechq.github.io/cdn/documentation/nar/nar_Style_File.png" width="640" />

###  **2.4.Using NAR component list in Studio**
  
- In Studio, add **Component List** under **"UI Settings"**.  
- Open the <a href="https://stechq.github.io/cdn/documentation/nar/componentList.ts" target="_blank">componentList.ts</a> file with Notepad++ and add its content to the **Component List**.

    <img src="https://stechq.github.io/cdn/documentation/nar/nar_Component_List.png" width="640" />

###  **2.5.Using NAR pipeline in Studio**

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

### **2.6.Using NAR Settings File in Studio**

- In Studio, add **Settings File** under **"UI Settings"**.
- Open the <a href="https://stechq.github.io/cdn/documentation/nar/settings.yaml" target="_blank">settings.yaml</a> file with Notepad++ and add its content to the **Settings File**.

    <img src="https://stechq.github.io/cdn/documentation/nar/nar_Settings_File.png" width="640" />


## **3.Uncompiled Export**

- When you are in the **ui** folder of your application, you can perform <a href="https://docs.onplateau.com/Export/Uncompiled-Export/using-uncompiledExport" target="_blank">Uncompiled Export</a>  by running the command **symphony-cli studio-sync**.

    **Example:** While in the **suggestion-ui** folder, **symphony-cli studio-sync** is executed.

- Your **UI Dockerfiles** file should have the existing definitions commented out and new definitions written.

    **Available:**
    ``` js
    RUN mkdir -p /qjson
    COPY ./UI Folder Name/static/pjson/ ./qjson 
    
    Example: COPY ./suggestion-ui/static/pjson/ ./qjson
    ``` 
    **New:**
    ``` js
    RUN mkdir -p /static
    COPY ./UI Folder Name/static/ ./static,
        
    Example: COPY ./suggestion-ui/static/ ./static    
    ``` 
- Application installed. With this installation, page URLs will change. It is necessary to perform the items in the **Nar Menu Definition step** during UAT and PROD environment installations.



## **4.Installation microUI Project On Bank Systems**

:::info **Note**
For detailed information, you should reach out to the **BT- Sürüm ve Yazılım Konfigürasyon Yönetimi** at **score@isbank.com.tr**
:::


Sample microUI Project: **MIPINTRA**<br/>
The application codes are in scoretfs, and the application is installed in the bank's OpenShift environment.<br/>
For more detailed information about project, you should reach out to the **Burak Mert** at **Burak.Mert@softtech.com.tr**<br/>
For more detailed information about **complicare microUI codes**, click <a href="https://scoretfs.isbank/ISBANK/MIPINTRA/_git/complicare" target="_blank">application codes</a><br/>
For more detailed information about **complicare-platform microUI codes**, click <a href="https://scoretfs.isbank/ISBANK/MIPINTRA/_git/complicare-platform" target="_blank">platform codes</a>


## **5.Integrating microUI Project Into The NAR** 

- For menu, UI page and service definitions methods document, refer to the  <a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=248876546" target="_blank">**Plateau UI and Service Definitions Methods Analysis Document.**</a>   


- The url of the first page to be called for the menu in the **NAR** is changed. The NAR menu definition should be as follows.
 
    **quick://microui/[microUI application name]/static/[module name]/pageName.qjson**  <br/>
    Example: quick://microui/suggestion-management/static/BOVApp/dashboard.qjson <br/>

      
:::info **Note**
For detailed information, you should reach out to the **Dijital Şube Platformu team** at **<DijitalSubePlatformu@softtech.com.tr>**
:::

### **5.1.Dijital Sube Platform team document addresses**

&nbsp;<a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=248876546" target="_blank">**Nar - Plateau UI and Service Definitions Methods Analysis Document.**</a>

&nbsp;<a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=540646991" target="_blank">**Nar - Methods Transmitted Through the Shell**</a>

&nbsp;<a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=516661024" target="_blank">**Nar - Plateau Originated Errors and Solutions**</a>

&nbsp;<a href="https://jira.isbank/confluence/display/KEGP/Nar+-+Quick+Header" target="_blank">**Nar - Plateau Header**</a>


