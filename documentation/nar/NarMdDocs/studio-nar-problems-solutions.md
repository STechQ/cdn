---
id: studio-nar-problems-solutions
title: Problems & Solutions
excludeInSearch: true
---

## **1.Studio Problems**

### **1.1.Button component color remains gray**
- If the Button component color remains gray on newly created pages, set the Button component's **DiscardSettings** prop to true.

<img src="https://stechq.github.io/cdn/documentation/nar/nar_button_style_gray.png" width="240"/>

### **1.2.Set service header consumer code**

- You can simulate it in Studio by using pipeline. For more detailed information about Nar pipeline usage in Studio, click <a href="https://jira.isbank/confluence/display/JE/5.+Studio+Integration+Of+UI+Projects" target="_blank">See More</a>.

<img src="https://stechq.github.io/cdn/documentation/nar/nar_Container_Services_File_getHeader.png" width="640" />
<br/>

- For more detailed information about **header screenName and consumerCode**, click <a href="https://jira.isbank/confluence/display/KEGP/Nar+-+Quick+Header" target="_blank">**Nar - Plateau Header**</a>.

### **1.3.Add authorization and ltpatoken to service header**

- If you are in Studio, you can simulate adding authorization and ltpatoken to service header by using **Container Services File** and **Settings File**. 

<img src="https://stechq.github.io/cdn/documentation/nar/nar_addServiceHeader_authorization_Ltpatoken.png" width="640" />
<br/>

### **1.4.Retrieve the user information logged into NAR**

To **retrieve the user information logged into NAR** on the UI page, the following command is used. You can get this response when you open the screen within NAR because the NAR shell provides this information. Therefore, you cannot get this information while testing in Studio. If you are in Studio, you can simulate it by using **Container Services File**, click <a href="https://jira.isbank/confluence/display/JE/5.+Studio+Integration+Of+UI+Projects" target="_blank">"Using NAR container services file in Studio"</a>.

```ts
let userContext: any = quick.containerServices?.getUserContext?.(); 
```
<br/>
<img src="https://stechq.github.io/cdn/documentation/nar/nar_Container_Services_File_getUserContext.png" width="640" />
<br/>

### **1.5.Retrieve the customer information acted on in the NAR** 

To **retrieve the customer information acted on in the NAR** on the UI page, the following command is used. You can get this response when you open the screen within NAR because the NAR shell provides this information. Therefore, you cannot get this information while testing in Studio. If you are in Studio, you can simulate it by using **Container Services File**, click <a href="https://jira.isbank/confluence/display/JE/5.+Studio+Integration+Of+UI+Projects" target="_blank">"Using NAR container services file in Studio"</a>.

```ts
let customerContext: any = quick.containerServices?.getCustomerContext?.();
```
<br/>
<img src="https://stechq.github.io/cdn/documentation/nar/nar_Container_Services_File_getCustomerContext.png" width="640" />
<br/>

### **1.6.Retrieve whether the user has ROTA authorization** 

To **retrieve whether the user has ROTA authorization** on the UI page, the following command is used. You can get this response when you open the screen within NAR because the NAR shell provides this information. Therefore, you cannot get this information while testing in Studio. If you are in Studio, you can simulate it by using **Container Services File**, click <a href="https://jira.isbank/confluence/display/JE/5.+Studio+Integration+Of+UI+Projects" target="_blank">"Using NAR container services file in Studio"</a>.

```ts
let resource: any = quick.containerServices?.getResource?.("EkrankisitiRG");
if(resource){
    // Yetki Var
}
else{
    // Yetki Yok
}
```
<br/>
<img src="https://stechq.github.io/cdn/documentation/nar/nar_Container_Services_File_getResource.png" width="640" />
<br/>


### **1.7.Using dchost.print and dchost.scan methods on the UI page**

- The following commands are used within the UI page. 

> Prints via dchost.
> > ```ts
> > (<any>quick.containerServices).print?.(data:any);
> >```

> Scans via dchost.
> > ```ts
> > (<any>quick.containerServices).scan?.(data:any) 
> >```

```ts 
let storeUtils = {
    print: print,
    scan: scan
}

quick.store.set('$bnkas_utils', storeUtils);

let ltpaToken = quick.cookie.get('LtpaToken2');

function print(fileName: string, content: string, urlPath?: string, timeout?: number, closable?: boolean) {
    let userContext: any = quick.containerServices.getUserContext();
    let requestObj: any = {
        "FormValue": Math.random().toString(),
        "consumerCode": "DCHOST.DIP",
        "tokenStr": ltpaToken,
        "operationDate": createTimeString() ?? "",
        "userId": userContext?.userid ?? '',
        "userContext": {
            "UserId": userContext?.userid ?? '',
            "Username": userContext?.userid ?? '',
            "AccountName": userContext?.workstationBO?.organizationUnitName ?? '',
            "UserNameAndSurname": (userContext?.firstname ?? '') + ' ' + (userContext?.lastname ?? ''),
            "WorkstationCode": userContext?.workstationBO?.code?.toString() ?? '',
            "Email": userContext?.email ?? '',
            "HostName": userContext?.hostName ?? '',
            "IpAddress": userContext?.ip ?? '',
            "Locale": userContext?.locale ?? '',
            "Title": userContext?.title ?? '',
            "OrganizationUnitCode": userContext?.workstationBO?.organizationUnitCode?.toString() ?? '',
            "OrganizationUnitName": userContext?.workstationBO?.organizationUnitName?.toString() ?? '',
            "CustomerContext": {
                "CustomerCitizenId": userContext?.customerContextBO?.customerCitizenId ?? '',
                "CustomerNumber": userContext?.customerContextBO?.customerNumber ?? '',
                "CustomerName": userContext?.customerContextBO?.customerName ?? '',
                "CustomerSurname": userContext?.customerContextBO?.customerSurname ?? '',
                "CustomerTaxId": userContext?.customerContextBO?.customerTaxId ?? '',
                "CustomerType": userContext?.customerContextBO?.customerType ?? '',
                "CustomerEmail": userContext?.customerContextBO?.customerEmail ?? '',
                "CustomerSegment": userContext?.customerContextBO?.customerSegment ?? '',
                "IntermediaryCitizenId": userContext?.customerContextBO?.intermediaryCitizenId ?? '',
                "IntermediaryCustomerNumber": userContext?.customerContextBO?.intermediaryCustomerNumber ?? '',
                "IntermediaryName": userContext?.customerContextBO?.intermediaryName ?? '',
                "IntermediarySurname": userContext?.customerContextBO?.intermediarySurname ?? '',
                "IntermediaryTaxId": userContext?.customerContextBO?.intermediaryTaxId ?? '',
                "CompanyName": userContext?.customerContextBO?.companyName ?? '',
                "FirstName": userContext?.customerContextBO?.firstName ?? '',
                "SecondName": userContext?.customerContextBO?.secondName ?? '',
                "KktcId": userContext?.customerContextBO?.kktcId ?? '',
                "PassportNo": userContext?.customerContextBO?.passportNo ?? '',
                "TelgrafNo": userContext?.customerContextBO?.telgrafNo ?? ''
            }
        },
        "printerBody": {
            "urlPath": urlPath ?? "",
            "fileName": fileName ?? "noName.pdf",
            "content": content ?? "",
            "fontName": "",
            "fontSize": "",
            "printerName": "",
            "pageCount": "",
            "printDocumentType": "",
            "contentSize": "",
            "contextType": 1,
            "base64Content": content ?? "",
            "docType": "",
            "Message": "",
            "isSucces": false,
            "isLastFile": false,
            "rootid": 0,
            "contentData": [],
            "multipleFileContent": []
        },
        "device": "Printer",
        "operationName": "PrintFileContent"
    }
    quick.containerServices.print({ "request": requestObj, "timeout": timeout ?? 30000, "closable": closable ?? false });
}



// operationName == "CloseForm"
// operationName == "ScanAndGetDocumentOCR"
// operationName == "ScanAndGetDocument"                            // DEFAULT
// operationName == "ScanAndSaveInContentManager"
// operationName == "ScanAndSaveInEFAY"
// operationName == "ScanAndSaveInEFAYCropSignature"
// operationName == "ScanAndGetContentManagerIdAndScannedContent"
// operationName == "scanSaveInContentMngrCropSignature"
// operationName == "showKypDocuments"
// operationName == "ScanAndSaveCustomerPhoto"
// operationName == "ScanAndSaveSignature"
// operationName == "ScanAndSaveCustomerDoc"
// operationName == "ScanAndSaveInLocal"
// operationName == "scannertestfortakas"
// operationName == "ScanAndSaveInGFS"

function scan(operationName?: string, timeout?: number, closable?: boolean) {
    let userContext: any = quick.containerServices.getUserContext();
    let requestObj: any = {
        "FormValue": Math.random().toString(),
        "consumerCode": "DCHOST.DIP",
        "tokenStr": ltpaToken,
        "operationDate": createTimeString() ?? "",
        "userId": userContext?.userid ?? '',
        "userContext": {
            "UserId": userContext?.userid ?? '',
            "Username": userContext?.userid ?? '',
            "AccountName": userContext?.workstationBO?.organizationUnitName ?? '',
            "UserNameAndSurname": (userContext?.firstname ?? '') + ' ' + (userContext?.lastname ?? ''),
            "WorkstationCode": userContext?.workstationBO?.code?.toString() ?? '',
            "Email": userContext?.email ?? '',
            "HostName": userContext?.hostName ?? '',
            "IpAddress": userContext?.ip ?? '',
            "Locale": userContext?.locale ?? '',
            "Title": userContext?.title ?? '',
            "OrganizationUnitCode": userContext?.workstationBO?.organizationUnitCode?.toString() ?? '',
            "OrganizationUnitName": userContext?.workstationBO?.organizationUnitName?.toString() ?? '',
            "CustomerContext": {
                "CustomerCitizenId": userContext?.customerContextBO?.customerCitizenId ?? '',
                "CustomerNumber": userContext?.customerContextBO?.customerNumber ?? '',
                "CustomerName": userContext?.customerContextBO?.customerName ?? '',
                "CustomerSurname": userContext?.customerContextBO?.customerSurname ?? '',
                "CustomerTaxId": userContext?.customerContextBO?.customerTaxId ?? '',
                "CustomerType": userContext?.customerContextBO?.customerType ?? '',
                "CustomerEmail": userContext?.customerContextBO?.customerEmail ?? '',
                "CustomerSegment": userContext?.customerContextBO?.customerSegment ?? '',
                "IntermediaryCitizenId": userContext?.customerContextBO?.intermediaryCitizenId ?? '',
                "IntermediaryCustomerNumber": userContext?.customerContextBO?.intermediaryCustomerNumber ?? '',
                "IntermediaryName": userContext?.customerContextBO?.intermediaryName ?? '',
                "IntermediarySurname": userContext?.customerContextBO?.intermediarySurname ?? '',
                "IntermediaryTaxId": userContext?.customerContextBO?.intermediaryTaxId ?? '',
                "CompanyName": userContext?.customerContextBO?.companyName ?? '',
                "FirstName": userContext?.customerContextBO?.firstName ?? '',
                "SecondName": userContext?.customerContextBO?.secondName ?? '',
                "KktcId": userContext?.customerContextBO?.kktcId ?? '',
                "PassportNo": userContext?.customerContextBO?.passportNo ?? '',
                "TelgrafNo": userContext?.customerContextBO?.telgrafNo ?? ''
            }
        },
        "scannerBody": {
            "ApplicationKey": "925ad36e-29d0-4473-8120-6b96f47e6466",
            "documentStorageType": "ELECTRONIC",
            "replacingDocumentId": "replace",
            "scanDocumentType": "scanDocumentType",
            "documentInfo": "documentInfo",
            "rootDocumentId": "",
            "ScanColorType": "grayscale",
            "AttachmentId": "AttachmentId",
            "LtpaTokenStr": ltpaToken,
            "ScanResolution": "240",
            "ScanDuplex": "ScanDuplex",
            "EnableCrop": "EnableCrop",
            "GetContent": true,
            "isVoucher": false,
            "SIID": "SIID",
            "Operation_Date": "Operation_Date",
            "musNo": "musNo",
            "sbKd": "sbKd",
            "hesAd": "hesAd",
            "girAd": "girAd",
            "girSic": "girSic",
            "girSbkd": "girSbkd",
            "girTerm": "girTerm",
            "girSeq": "girSeq",
            "uzanti": "uzanti",
            "tellerNo": "tellerNo",
            "branchCode": "branchCode",
            "docType": "docType",
            "imageDocumentType": 1,
            "dcConsumerCode": "dcConsumerCode",
            "folderType": "folderType",
            "isCroppingForced": "isCroppingForced",
            "tellerSequential": "tellerSequential",
            "Metadata": [{
                "MetadataCode": "CRBCustomerNo",
                "Value": (<any>quick.containerServices).getCustomerContext().customerNumber ?? ''
            }, {
                "MetadataCode": "hnea7f",
                "Value": (<any>quick.containerServices).getCustomerContext().customerCitizenId ?? ''
            }, {
                "MetadataCode": "epaci4",
                "Value": (<any>quick.containerServices).getCustomerContext().customerName ?? ''
            }, {
                "MetadataCode": "MF_1_F1",
                "Value": (<any>quick.containerServices).getCustomerContext().customerSurname ?? ''
            }, {
                "MetadataCode": "MF_17_Main",
                "Value": (<any>quick.containerServices).getUserContext().branchCode ?? ''
            }, {
                "MetadataCode": "SIGORTA_TIPI",
                "Value": "Hayat" //Kartıma Hayat Sigortası
            }
            ],
            "DocumentAttribute": [{
                "name": "name",
                "type": 2,
                "value": "value"
            }
            ],
            "FolderAttribute": [{
                "name": "name",
                "type": 2,
                "value": "value"
            }
            ],
            "criterias": [{
                "itemTypeName": "itemTypeName",
                "withVersions": true,
                "numberOfResult": 5,
                "searchAttributes": [{
                    "attributeNameField": "attributeNameField",
                    "constraint": [{
                        "attributeValues": [
                            "Value",
                            "Value2"
                        ],
                        "searchOperator": 5
                    }
                    ]
                }
                ]
            }
            ],
            "DocumentInfo": {
                "Title": "Title",
                "Description": "Description",
                "PageCount": 3,
                "PageCountSpecified": false,
                "Item": "SIGORTA_AYDINLATMA_METNI",
                "ItemElementName": "ItemElementName"
            },
            "Criteria": {
                "itemTypeName": "itemTypeName",
                "withVersions": true,
                "numberOfResult": 2,
                "searchCriteria": [{
                    "attributeName": "attributeName",
                    "constraints": [{
                        "attributeValues": [
                            "Value",
                            "Value2"
                        ],
                        "searchOperator": 3
                    }
                    ]
                }
                ]
            }
        },
        "device": "Scanner",
        "operationName": operationName ?? "ScanAndGetDocument"
    }

 let scanResponse = quick.containerServices.scan({ "request": requestObj, "timeout": timeout ?? 30000, "closable": closable ?? false });
 return scanResponse;
}

function createTimeString() {
    let timeString = (new Date).toLocaleDateString() + ' ' + (new Date).toLocaleTimeString().split(' ')[0];
    return timeString;
}
```


### **1.8.Efay Document Scanning DcHost integration on the UI page**

- The following commands are used within the UI page. 

```ts

//api/scan_and_saveInEFAY: http://127.0.0.1:4852/BranchDeviceConnector/ScannerServiceRest/ScanAndSaveInEFAY?format=json

let ltpaToken = quick.cookie.get('LtpaToken2');
let userContext: any = quick.containerServices.getUserContext();
let customerContext: any = quick.containerServices.getCustomerContext();

let requestObj: any = {
    "LtpaTokenStr": ltpaToken,
    "ReplacingDocumentId": null,
    "DocumentStorageType": "ELECTRONIC",
    "UserContext": {
        "HostName": userContext?.hostName ?? null,
        "IpAddress": userContext?.ip ?? null,
        "Locale": userContext?.locale ?? null,
        "OrganizationUnitCode": userContext?.workstationBO?.organizationUnitCode?.toString() ?? null,
        "OrganizationUnitName": userContext?.workstationBO?.organizationUnitName?.toString() ?? null,
        "Title": userContext?.title ?? null,
        "UserId": userContext?.userid ?? null,
        "Username": userContext?.userid ?? null,
        "UserNameAndSurname": (userContext?.firstname ?? '') + ' ' + (userContext?.lastname ?? ''),
        "Email": userContext?.email ?? null,
        "WorkstationCode": userContext?.workstationBO?.code?.toString() ?? null,
        "AccountName": userContext?.workstationBO?.organizationUnitName ?? null,
        "CustomerContext": {
            "CustomerCitizenId": customerContext?.customerCitizenId ?? null,
            "CustomerNumber": customerContext?.customerNumber ?? null,
            "CustomerName": customerContext?.customerName ?? null,
            "CustomerSurname": customerContext?.customerSurname ?? null,
            "CustomerTaxId": customerContext?.customerTaxId ?? null,
            "CustomerType": customerContext?.customerType ?? null,
            "CustomerEmail": customerContext?.customerEmail ?? null,
            "CustomerSegment": customerContext?.customerSegment ?? null,
            "IntermediaryCitizenId": customerContext?.intermediaryCitizenId ?? null,
            "IntermediaryCustomerNumber": customerContext?.intermediaryCustomerNumber ?? null,
            "IntermediaryName": customerContext?.intermediaryName ?? null,
            "IntermediarySurname": customerContext?.intermediarySurname ?? null,
            "IntermediaryTaxId": customerContext?.intermediaryTaxId ?? null,
            "CompanyName": customerContext?.companyName ?? null,
            "FirstName": customerContext?.firstName ?? null,
            "SecondName": customerContext?.secondName ?? null,
            "KktcId": customerContext?.kktcId ?? null,
            "PassportNo": customerContext?.passportNo ?? null,
            "TelgrafNo": customerContext?.telgrafNo ?? null,
            "individualCorporate": {
                "b": false
            }
        }
    },
    "ApplicationKey": "8b9ada0b-ab9a-4f10-be3b-cba3c29b7ce9",
    "RootDocumentId": null,
    "ScanColorType": "grayscale",
    "ScanResolution": "150",
    "ScanDuplex": null,
    "isCroppingForced": null,
    "GetContent": false,
    "SIID": null,
    "Operation_Date": null,
    "isVoucher": false,
    "DocumentInfo": {
        "Item": "BHS",
        "ItemElementName": "contentTypeVersion"
    },
    "Metadata": [
        {
            "MetadataCode": "epaci4",
            "Value": (<any>quick.containerServices).getCustomerContext().customerName ?? null
        },
        {
            "MetadataCode": "hnea7f",
            "Value": (<any>quick.containerServices).getCustomerContext().customerCitizenId ?? null
        },
        {
            "MetadataCode": "CRBCustomerNo",
            "Value": (<any>quick.containerServices).getCustomerContext().customerNumber ?? null
        }
    ],
    "base64Content": null,
    "fileExtension": null
}

try {
    let ret = (async () => {
        let scanAndSaveInEFAY: IRequest = {
            url: "api/scan_and_saveInEFAY",
            data: requestObj,
            blockRender: false,
            http: "post",
            onFail: null,
            onSuccess: null,
            responseField: "data"
        };
        let response = await quick.Request.async(scanAndSaveInEFAY);

        if (response === null || response.data.ReturnCode === null) {
            components.alertMessagesComp.alertError({ param1: "DcHost Başlatılamadı!" });
        } else if (response.data.ReturnCode != 0) {
            components.alertMessagesComp.alertError({ param1: "DcHost Başlatılamadı!" });
            quick.EM.trace("!!!ScanAndSaveInEFAY Hata Aldı: " + response.data.ResultMessage );
        } else if (response.data.ReturnCode === 0 && response.data.ContentManagerID !== undefined) {
            components.alertMessagesComp.alertSuccess({ param1: "Döküman Başarılı bir şekilde yüklenmiştir."});
            var storeSessionEfayId = { "efayId": response.data.ContentManagerID.toString() }
            quick.store.set('$storeSessionEfayId', storeSessionEfayId);
        }
    })()
} catch (exception) {
    quick.EM.trace("exception" + exception);
}
```

## **2.Nar Problems**

:::info **Note**
For detailed information, you should reach out to the **Dijital Şube Platformu team** at **<DijitalSubePlatformu@softtech.com.tr>**
:::

### **2.1. Dijital Sube Platform team document addresses**

&nbsp;<a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=248876546" target="_blank">**Nar - Plateau UI and Service Definitions Methods Analysis Document.**</a>

&nbsp;<a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=540646991" target="_blank">**Nar - Methods Transmitted Through the Shell**</a>

&nbsp;<a href="https://jira.isbank/confluence/pages/viewpage.action?pageId=516661024" target="_blank">**Nar - Plateau Originated Errors and Solutions**</a>

&nbsp;<a href="https://jira.isbank/confluence/display/KEGP/Nar+-+Quick+Header" target="_blank">**Nar - Plateau Header**</a>


###  **2.2. To open a new quick screen in NAR in a new TAB from the Quick screen:**

```ts
const urlString = "https://xxx";
const businessKey = "myBusinessKey"; // sayfanıza vereceğiniz unig bir isim olmalıdır.

if (quick.containerServices.extensions?.customFunctions?.navigationManager?.go) {
    quick.containerServices.extensions!.customFunctions.navigationManager.go(businessKey, urlString, { isQuick: false, sCustomerSession: true, sSingleInstanceKey: businessKey });
}
```

### **2.3. To open the Plateau UI page from the PEGA screen:**

- **On the NAR side:**

    - If there is a parameter, **set the parameter using spesific key**.

    ```js
    top.advisorDesktop.setQueryParamsModel("myKey", "?assessmentId=111&customerNumber=161688755&processId=TAHSIS24-23236");
    ```

    - The page is called.
        - **Multi TAB:** If the page to be navigated to is different from the menu definition, this is used. The name in the first parameter also needs to be changed. Sample:"KREDİ 360-2"

            ```js
            top.advisorDesktop.windowManager.openWindow('KREDİ 360-2','quick://microui/assessment-management/static/Assessment/dash_v2_0.qjson','',null,null,null,null,null,null);
            
            ```
        - **Single TAB:** If the page to be navigated to is the same as the menu definition, this is used.   
            ```js
            top.advisorDesktop.windowManager.openWindow('Kredi Değerlendirme', 'quick://adkCreditEvaluationTracking/AdkCreditEvaluationTracking.js', '', 'adkCreditEvaluationTracking', null, null, null, null, null);
            
            ```
- **On the Plateau UI page side:**            
    - Get the parameter value defined in the NAR with the spesific key.
      ```js
        let queryParams = quick.containerServices?.extensions?.getQueryParamsModel?.("myKey");
        ```

### **2.4. Getting the parameter value defined in the NAR on the Plateau UI page side**        

- **On the NAR side:**
    Set the parameter value with the spesific key.

    > setQueryParamsModel(key: string, value: string)
    ```js
    top.advisorDesktop.setQueryParamsModel("myKey", "myValue");
    ```

- **On the Plateau UI page side:**  
     Get the parameter value defined in the NAR with the spesific key.

     > getQueryParamsModel(key: string)
    ```js
        let queryParams = quick.containerServices?.extensions?.getQueryParamsModel?.("myKey");
    ``` 