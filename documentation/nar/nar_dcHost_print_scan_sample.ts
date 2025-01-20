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