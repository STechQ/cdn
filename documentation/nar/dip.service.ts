import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';


import { BaseService } from './base.service';

import { DchostService } from './dchost.service';
import { RestService } from './rest.service';


import { dipModes, isDevMode, AUTHENTICATION_ENUMS } from '../constants';

import { TabManagerService } from './tab-manager.service';
import { UserService } from './user.service';
import { SecurityService } from './security.service';
import { MenuService } from './menu.service';
import { UtilService } from './util.service';
import { FavoriteService } from './favorite.service';
import { FdrManagerService } from './customer/fdr-manager.service';

import { ModeBO } from '../models/mode-bo';
import { CustomerService } from './customer/customer.service';
import { MessageBoxService } from './messagebox.service';
import { ExceptionService } from './exception.service';

import { AdvancedSearchService } from './customer/advanced-search.service';

import { DipModelService } from './dip-model.service';
import { SiramatikService } from './siramatik.service';

import { TranslateService } from '@ngx-translate/core';
import { OnbehalfofService } from './onbehalfof.service';
import { TaneAdapterService } from './tane-adapter.service';
import { LoadingService } from './loading.service';
import { WindowTypeEnum } from "../models/window-bo";
import { OpenTabModelBO } from "../models/open-tab-model-bo";

// RALLY UI
import { ScanAndOcrService } from './scan-and-ocr.service';
import { BiometricService } from './biometric.service';

import { ParamsBO, ParamBO } from '../models/paramsBO';
import { BranchRespBOList } from '../models/branchBO';
import { DipKeysBO } from '../models/DipKeysBO';
import { DynamicMessageService } from './dynamicMessage.service';
import { ChartTypeBO } from '../models/customer/CustomerStrategyPlanningBO';
import { MessageBoxIframeService } from './messagebox-iframe.service';
import { MokIframeService } from './mok-iframe.service';
import { MessageType } from '../models/message-bo';
import { ScvTabBO } from '../models/customer/scv-tab-bo';


@Injectable()
export class DipService extends BaseService {
  
  private routeSubscription: Subscription;


  public selectedScvTabBO: ScvTabBO;
  private modeBOs: ModeBO[] = [];
  private activeModeBO: ModeBO;
  private loadingCounterId: number;
  //private redirectUrl:string;
  isSharePointEnable: boolean;
  private paramsBO: ParamsBO;
  globalSearchInput: string;
  private menuItem: any;
  private params: any;

  constructor(
    private readonly router: Router,
    public readonly dchost: DchostService,
    public readonly rest: RestService,
    public readonly tabManager: TabManagerService,
    public readonly user: UserService,
    public readonly security: SecurityService,
    public readonly menu: MenuService,
    public readonly utility: UtilService,
    public readonly customer: CustomerService,
    public readonly messageBox: MessageBoxService,
    public readonly exception: ExceptionService,
    public readonly model: DipModelService,
    public readonly favorite: FavoriteService,
    public readonly advancedSearch: AdvancedSearchService,
    public readonly translate: TranslateService,
    public readonly siramatik: SiramatikService,
    public readonly onbehalfof: OnbehalfofService,
    public readonly taneAdapter: TaneAdapterService,
    public readonly dynamicMessage: DynamicMessageService,

    public readonly fdrManager: FdrManagerService,
    public readonly iframeService: MessageBoxIframeService,
    public readonly mokIframeService: MokIframeService,

    // RALLY UI
    public readonly scanAndOcrService: ScanAndOcrService,
    public readonly biometricService: BiometricService,
    public readonly loadingService: LoadingService

  ) {
    super();
    if (!this.routeSubscription) {
      this.routeSubscription = this.router.events.subscribe((url: any) => this.setCurrentRoute(url));
    }
    this.retrieveDipModes();

    //RALLY UI
    try {
      this.setContainerInterface();

    } catch (error) {
      console.log(error);
    }

  }

  /*    public setRedirectUrl(redirectUrl:string) {
          this.redirectUrl = redirectUrl;
      }
  */
  public redirectContainerLogon() {
    if (this.user.getContainerLogonRequestRedirectUrl()) {
      this.utility.go(this.user.getContainerLogonRequestRedirectUrl());
      this.user.clearContainerLogonRequestRedirectUrl();
    }
  }


    //DISPATCHER
    public dispatcher(data: any, timeout: number, closable: boolean) {
        let observable = this.httpService.postMain(restUrls.dchost.dispatcher, data, timeout, closable);
        let httpCallSubject: Subject<any> = new Subject<any>();
        observable.subscribe(
            response => {
                httpCallSubject.next({ response: response, serviceInfo: restUrls.dchost.dispatcher });
            },
            error => {
                httpCallSubject.next({ response: error, serviceInfo: restUrls.dchost.dispatcher });
            }
        );
        return httpCallSubject.asObservable();

    }
	
	
	jQuery.ajax({
       crossDomain: true,
        type: 'POST',
        url: 'http://localhost:4852/BranchDeviceConnector/ScannerServiceRest/ScanAndSaveInEFAY?format=json',
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify(obj),
        success: function (data, textStatus, req) {
            
            var parsedData = JSON.parse(JSON.stringify(data));
            var documentID = parsedData['ContentManagerID'];

            if (documentID != null) {
                alert("Doküman başarı ile yüklenmiştir.");

                pega.u.d.gBusyInd.hide();

                saveFunction(documentID, eArrID,documentType);
 
                if (sectionStr != '' && sectionStr != null)
                    pega.u.d.reloadSection(pega.u.d.getSectionByName(sectionStr, "", ""));
            }
            else {
                alert("Doküman yüklenememiştir. Lütfen tekrar deneyiniz.");
                hideBusyIndicator();
            }
        },

  // RALLY UI
  public setContainerInterface() {
    this.model.setContainerInterface(

      {
        activeRendererCb: () => this.tabManager.getActiveTabRenderer(),
        authenticatedCb: () => this.user.isAuthenticated(),

        userContextCb: () => this.model.getUserContextForApp(),
        customerContextCb: () => this.model.getCustomerContextBOForApp(),
        callMessageBox: (messageType, messages, title) => this.messageBox.callMessageBox(messageType, messages, title),
        print: (data: any) => this.dchost.dispatcher(data.request, data.timeout, data.closable),
        scan: (data: any) => this.dchost.dispatcher(data.request, data.timeout, data.closable),
        ocr: (data: any) => this.scanAndOcrService.scanAndOcrManager(data),
        biometric: (data: any) => this.biometricService.biometricManager(data),
        biometricTechSign: (reqData: any, pdfData: any) => this.biometricService.biometricTechSign(reqData, pdfData),
        openWindow: (sWindowTitle, sUrl, options) => this.openWindow(sWindowTitle, sUrl, options),
        resourceCb: (resource: any) => this.model.checkResource(resource.parameters[0] != null ? resource.parameters[0] : null), //quick.containerServices.resourceCb(resource) → iletilen parametrenin kullanıcıda rota yetkisi olup olmadığını döner.
        getURL: (url: string, mode: string) => {
          // '/static/ui-capera/pages/FundList.qjson'
          // '/microui/xx/qjson/yy.js'
          const prefix = this.searchQuickParam(this.calculateModuleFromUrl(url), mode);
          const prefixEnds = prefix.endsWith("/"), urlStarts = url.startsWith("/");
          // Plateau Studio Websdk entegrasyon starts
          url = urlStarts ? url.substring(1) : url;
          if (url.startsWith("narMicroUI")) {
            const firstSlash = url.indexOf("/");
            const secondSlash = url.indexOf("/", firstSlash);
            url = 'microui' + url.substring(secondSlash);
          }
          url = urlStarts ? "/" + url : url;
          // Plateau Studio Websdk entegrasyon ends
          if (urlStarts && prefixEnds) { return prefix + url.substring(1); }

          return (urlStarts || prefixEnds) ? prefix + url : prefix + "/" + url;
        },
        extensions: {
          customFunctions: {
            navigationManager: {
              go: (title, url, options?) => {
                options = options || {}
                this.openWindow(title, url, options)
              },
              triggerPreviousPage: null
            },
          },
          getQueryParams: () => this.model.getQueryParams(),
          // loadingCounter: (oldValue, newValue) => {
          //   if (newValue > 0) {
          //     if (this.loadingCounterId > 0) {
          //       this.loadingService.removeLoading(this.loadingCounterId)
          //     }
          //     this.loadingCounterId = this.loadingService.addNewLoading({ silent: false })
          //   } else {
          //     this.loadingService.removeLoading(this.loadingCounterId)
          //   }
          // },
          siramatik: {
            getCustomerFromKiosk: (url: string) => this.siramatik.getCustomerFromKiosk(url),
            getValueWithParam: (key: string) => this.siramatik.getValueWithParam(key),
            retrieveSiramatikReport: (branchCode: string) => this.siramatik.retrieveSiramatikReport(branchCode),
          },
          getQuickUrl: (modulName: string, cType: string) => this.searchQuickParam(modulName, cType),
          getHeader: (moduleName, key) => this.getHeader(moduleName, key),
          getHeaderConsumerCode: () => this.model.getHeaderConsumerCode(),
          setHeaderByConsumerCode: (consumerCode:string) => this.model.getHeaderByConsumerCode(consumerCode),
          setHeaderByScreenIsbClient: (screenName:string) => this.model.getHeaderByScreenIsbClient(screenName),
          showVoucherPopUp: (urlparam: string) => this.iframeService.show("/com.isbank.tane.eventcommon.web/eventcommon.html?" + urlparam + "#GenericVoucherPopupPagePlace:", false, "Dekont Yazdır", false),
          getAccessTokenUserIam: () => this.model.getUserIamAccessToken(),
          getRefreshTokenUserIam: () => this.user.getRefreshTokenUserIam(this.model.getUserIamRefreshToken()),
          getCorrelationId: () => this.getCorrelationId(),
          openWindow: (sWindowTitle, sUrl, options) => this.openWindow(sWindowTitle, sUrl, options),
          closeWindow: () => this.closeWindow(),
          getWindowId:(window) => this.getWindowId(window),
          tellerAssist:(data: any) => this.dchost.dispatcher(data.request, data.timeout, data.closable),
          guid:() => this.utility.guid(),
          searchFromCrm: (customerNumber) => this.searchFromCrm(customerNumber),
          scanAndSave: (data: any) => this.dchost.scanAndSave(data.request, data.timeout, data.closable),
          scanAndSaveInEFAY: (data: any) => this.dchost.scanAndSaveInEFAY(data.request, data.timeout, data.closable),

        },
        showMOKPopup: (id: string) =>  this.showMOKPopup(id)

        // modulName : havale   qjson : paraGonder   --> generic.qube.isbank/havale/paragonder
        //  modulName : havale   qjson : gelenHavale   --> generic.qube.isbank/havale/paragonder
        //  modulName : havale   qjson : yurtdisiHavale   --> generic.qube.isbank/havale/yurtdisiHavale
        // modulename : paratransfer qjson : westernUnionParaGonder   -->
        // moduleName : Account    qjson : paraGonder   -->  https://apigateway-basic-service-dip.apps.generic.kube.isbank/

      }

      /*
                  {
                   //Getters
                  isAuthenticated: () => this.user.isAuthenticated(),
                  getUserContext: () => this.model.getUserContextForApp(),
                  getCustomerContext: () => this.model.getCustomerContextBOForApp(),
                  isAuthorized: (resource: string) => this.model.checkResource(resource),

                  //Operations
                  searchCustomer: (customerNumber: any) => this.customer.searchCustomerWithCustomerNo(customerNumber, null),
                  dchost: (data: any, timeout: number, closable: boolean) => this.dchost.dispatcher(data, timeout, closable),
                  scanAndOcr: (scanAndOcrRequestBO: any) => this.scanAndOcrService.scanAndOcrManager(scanAndOcrRequestBO),
                  biometric: (biometricRequestBO: any) => this.biometricService.biometricManager(biometricRequestBO),
                  siramatik: {
                      getCustomerFromKiosk: (url: string) => this.siramatik.getCustomerFromKiosk(url),
                      getValueWithParam: (key: string) => this.siramatik.getValueWithParam(key),
                  },

                  //Rest Client
                  rest: {
                      get: (serviceInfo: any) => this.rest.httpService.get(serviceInfo),
                      getWithHeader: (serviceInfo: any, urlparams: String) => this.rest.httpService.getWithHeader(serviceInfo, urlparams),
                      post: (serviceInfo: any, postData: any) => this.rest.httpService.post(serviceInfo, postData),
                      postCors: (serviceInfo: any, postData: any) => this.rest.httpService.postCors(serviceInfo, postData),
                      postWithHeader: (serviceInfo: any, postData: any) => this.rest.httpService.postWithHeader(serviceInfo, postData),
                  },
              }
       */

    );

    //    (<any>window).plateau_ui.setContainerServices(this.model.getContainerInterface())

    window["plateauUIContainerServices"] = this.model.getContainerInterface();


    var PlateauUIOptions = {
      corsEnabled: true,
      settings: "../../../../dip/assets/settings/settings_web.js"
    };

    this.model.setdipPlateauUIOptions(PlateauUIOptions);

  }


  private closeWindow() {
    this.tabManager.closeTabByOrder(this.tabManager.findActiveTabOrder() - 1);
  }

  private getWindowId(window) {
    if (window != undefined && window.frameElement != undefined)
      return window.frameElement.id;
  }


  private calculateModuleFromUrl(url: string): string {
    // '/static/ui-capera/pages/FundList.qjson'
    // '/microui/xx/qjson/yy.js'
    var s = url;
    if (!url.startsWith('/')) {
      s = '/' + s;
    }
    var pathSplitted = s.split('/');
    var moduleName = pathSplitted[2];
    return moduleName;
  }
  public searchQuickParam(modulName, cType) {
    if (this.model.getQuickUrlList() && this.model.getQuickUrlList().quickItems) {
      try {
        return this.model.getQuickUrlList().quickItems.find(element => element.qKey == modulName + '&x&' + cType).qValue;
      } catch (e) {
        return "";
      }

    }
  }
//let options = {sCustomerSession=true,}
  private openWindow(sWindowTitle, sUrl, options) {
    let startDate = Date.now();
    console.log("openWindow called from quick go" + startDate);
    var sSess = false;
    if (options.sCustomerSession) {
      sSess = true;
    }
    this.menuItem = {
      imoMenuName: sWindowTitle,
      imoMenuUrl: sUrl,
      menuId: this.tabManager.index++,
      isCustomer: sSess,

      instanceKey: options.sSingleInstanceKey || false,
      isOpenWithPopup: false,
      isRedirected: false,
      isCustomerSession: options.sCustomerSession || false
    };

    let opentabbo: OpenTabModelBO = {
      code: sWindowTitle,
      type: WindowTypeEnum.MENU,
      menuItem: this.menuItem,
      hasClose: true,
      closeIfExists: false,
    };

    setTimeout(() => { this.tabManager.tabBOListUpdated.next(true); }, 500);

    let finishDate = Date.now();
    let durationfull = finishDate - startDate;
    console.log("open window finished after " + durationfull + "    - finish date : " + finishDate);

    if (options.isQuick == null || options.isQuick == undefined) {
      options.isQuick = true;
    }

    if (!options.isQuick) {
      console.log("tane from quick -- go")
      this.tabManager.openTab(opentabbo); // izleme ekibi
    } else {
      console.log("quick from quick -- go")
      this.tabManager.openRallyTab(this.menuItem, options); // quick
    }

    return (<any>window).openWindowObject;
  }

public getHeader(moduleName, key) {
    //TODO : MODULENAME IS HERE, DECIDE DATA
    if (key == "token") {
      return this.model.getSecurityToken();
    } else if (key == "consumer") {
      return '{ "branchContextV1": { "lang": "tr", "consumerCode": "TANE.ID", "channelCode":"branch", "ipAddress": "' + this.model.getUserContext().ip + '", "workstationName": "' + this.model.getUserContext().workstationBO.name + '", "organizationUnitCode":' + this.model.getUserContext().branchCode + ' }}';
    } else if (key == "customer") {
      return (this.model.getUserContext().customerContextBO && this.model.getUserContext().customerContextBO.customerNumber) ? this.getRallyCustomerObj() : '{"customer": {}}';
    } else if (key == "authorization") {
      return this.model.isIamenabled() == true && !this.utility.isNullOrEmpty(this.model.getUserIamAccessToken()) ? 'Bearer ' + this.model.getUserIamAccessToken() : this.model.getSecurityToken();
    } else if (key == "userid") {
      return this.model.getUserContext().userid;
    } else if (key == "branchCode") {
      return this.model.getUserContext().branchCode;
    } else if (key == "isbClient") {
      return '{"branch-v1" : {"workstationName": "' + this.model.getUserContext().workstationBO.name + '", "organizationUnitCode": ' + this.model.getUserContext().branchCode + ', "tellerId":' + this.model.getUserContext().workstationBO.code + ', "screenName":"NarCmmnScr"}}'
    }
    else return "";
  }
  


  public getRallyCustomerObj() {
    let custStr = '{"customer": {"customerNumber":' + Number(this.model.getUserContext().customerContextBO.customerNumber);
    // this.model.getUserContext().customerContextBO.customerCitizenId ? custStr += ', "citizenId": ' + this.model.getUserContext().customerContextBO.customerCitizenId : '';
    // this.model.getUserContext().customerContextBO.customerTaxId ? custStr += ', "taxId": ' + this.model.getUserContext().customerContextBO.customerTaxId : '';
    // this.model.getUserContext().customerContextBO.customerName ? custStr += ', "name": "' + this.model.getUserContext().customerContextBO.customerName + '"' : '';
    // this.model.getUserContext().customerContextBO.customerSurname ? custStr += ', "surname": "' + this.model.getUserContext().customerContextBO.customerSurname + '"' : '';
    custStr += '}}';
    return this.jsonEscapeUTF(custStr);
  }

  public jsonEscapeUTF(s) {
    return s.replace(/[^\x20-\x7F]/g, x => "\\u" + ("000" + x.codePointAt(0).toString(16)).slice(-4))
  }

  public getHeaderUrl(): string {
    return this.model.getDipKeysBO().sharePointUrl + '/SiteSayfa/RedirectPage.aspx';
  }
  public redirectContainerLogonFailed() {
    this.utility.go('container-logon/failed');
  }


  public getCorrelationId() {
    return this.model.getUserContext().workstationBO.name + '-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  public checkUserContextAndRedirect() {
    //console.log('CHECKING...', this.user.authenticated.getValue(), this.router.url);

    switch (this.security.authenticated.getValue()) {
      case AUTHENTICATION_ENUMS.HOME:
        if (this.user.getContainerLogonRequestRedirectUrl()) {
          //this.redirectContainerLogon();
        }
        else if (!this.user.isContainerLogon() && this.router.url.indexOf('frontend') <= -1 && this.router.url.indexOf('container-home') <= -1) {

          if (this.security.isAuthenticated()) {
            if(!this.utility.isNullOrEmpty(this.model.getUserIamAccessToken())) {
              if (this.utility.isTest()) {
                setInterval(() => {
                  this.user.getRefreshTokenUserIam(this.model.getUserIamRefreshToken());
                }, 1680000);//TODO:1800000 olacak
              } else {
                if (this.model.isIamenabled() == true) {
                  setInterval(() => {
                    this.user.getRefreshTokenUserIam(this.model.getUserIamRefreshToken());
                  }, 1680000);//TODO:1800000 olacak
                }
              }
            } else {//Access token yoksa 30 dkda bir refresh token çağırmamalı access token çağırmalı
              if (!this.utility.isTest()) {
                if (this.model.isIamenabled() == true) {
                  this.user.getAccessTokenForRefreshUserIam(this.model.getUidwithInitials());
                  }
              }
            }
            if (this.model.getDipKeysBO().sharePointUrl == undefined || this.model.getDipKeysBO().isSharePoint == undefined) {
              //  console.log("dipservice- sharePointUrl veya isSharePoint çekiliyor");
              let obs = this.user.getValuesWithParameters();
              obs.subscribe(
                response => {
                  this.routeAfterCheckSharePoint();
                });
            } else {
              this.routeAfterCheckSharePoint();
            }
          }
        }
        break;
      case AUTHENTICATION_ENUMS.TOKEN:
        if (this.user.isContainerLogonRequest()) {
          this.utility.go('container-logon/failed');
        } else if (this.router.url.indexOf('logon') <= -1) {
          this.utility.go('logon');
        }
        break;
      case AUTHENTICATION_ENUMS.USERCONTEXT:
        if (this.user.isContainerLogonRequest()) {
          this.utility.go('container-logon/failed');
        } else if (this.router.url.indexOf('logon') <= -1) {
          this.utility.go('logon');
        }
        break;
      case AUTHENTICATION_ENUMS.WORKSTATION:
        if (this.user.isContainerLogonRequest()) {
          this.utility.go('container-logon/failed');
        } else if (this.router.url.indexOf('selectworkstation') <= -1) {
          //  console.log("AUTHENTICATION_ENUMS.WORKSTATION");
          this.utility.go('selectworkstation');
        }
        break;
      case AUTHENTICATION_ENUMS.IAMTOKEN:
        if (this.user.isContainerLogonRequest()) {
          this.utility.go('container-logon/failed');
        } else if (this.router.url.indexOf('logon') <= -1) {
          this.utility.go('logon');
        }
        break;
      case AUTHENTICATION_ENUMS.EAPPROVE:
        if (this.user.isContainerLogonRequest()) {
          this.utility.go('container-logon/failed');
        } else if (this.router.url.indexOf('errorEapprove') <= -1) {

          this.utility.go('errorEapprove');
        }
        break;
      case AUTHENTICATION_ENUMS.LOGOFF:
        if (this.user.isContainerLogonRequest()) {
          this.utility.go('container-logon/failed');
        } else if (this.router.url.indexOf('logoff') <= -1) {
          this.utility.go('logoff');
        }
        break;
    }
  }


  public routeAfterCheckSharePoint() {
    this.retrieveDipModes();

    // console.log("//// sharepointURL: " + this.model.getDipKeysBO().sharePointUrl);
    // console.log("//// isSharePoint: " + this.model.getDipKeysBO().isSharePoint);

    // : oto yönlendirme kapatildi
    this.isSharePointEnable = this.model.getDipKeysBO().isSharePoint == 'true' ? true : false;
    this.utility.go('frontend/work');
    this.model.showReadMode = false;
    this.model.showHomeMode = false;
    this.model.showProfileMode = false;
    this.model.showPhoneMode = false;
    this.model.showGlobalSearchMode = false;
    /* if (!this.isSharePointEnable || !this.user.sharePointRetured) {
         this.utility.go('frontend/work');
         this.model.showReadMode = false;
         this.model.showHomeMode = false;

         this.model.showProfileMode = false;
         this.model.showPhoneMode = false;
         this.model.showGlobalSearchMode = false;
     } else {
         this.model.showReadMode = false;
         this.model.showHomeMode = true;

         this.model.showProfileMode = false;
         this.model.showPhoneMode = false;
         this.model.showGlobalSearchMode = false;

     } */
  }
  public subscribeToRouteChange(method: Function) {
    this.routeSubscription = this.router.events.subscribe((url: any) => method());
  }


  public getModeBOs() {
    return this.modeBOs;
  }

  public getActiveModeBO() {
    if (this.activeModeBO == undefined) {
      this.activeModeBO = new ModeBO('0', '', '', '', false, 0);
    }
    return this.activeModeBO;
  }


  activate2(name: string) {
    for (var i = 0; i < this.modeBOs.length; i++) {
      if (this.modeBOs[i].getName() === name || name.indexOf(this.modeBOs[i].getName()) > -1) {
        this.modeBOs[i].activate();
        this.activeModeBO = this.modeBOs[i];
      } else {
        this.modeBOs[i].deactivate()
      }
    }
  }

  private setCurrentRoute(route) {
    if (route instanceof NavigationStart) {
      //if(this.user.isAuthenticated()) {
      this.activate(route.url);
      //} else { // NOT AUTHENTICATED REDIRECT TO LOGON PAGE
      //IF IT IS ALREADY ONE OF THE LOGON PAGES, DO NOT REDIRECT TO PREVENT LOOP
      //  if(route.url.indexOf('frontend')>-1) {
      //console.log('Redirecting to Logon Page...');
      //this.go('logon');
      // }
      //}
    }
  }

  private retrieveDipModes() {
    this.modeBOs = [];
    for (let i = 0; i < dipModes.length; i++) {
      if (this.model.getDipKeysBO().sharePointUrl) {
        //burada this.model.getDipKeysBO().sharePointUrl prodda 5556 li gelecektir bundan dolayı kedinlikle kaldırılmamalı


        if (dipModes[i].id == 'profil' && this.model.getUserContext()) {
          this.modeBOs.push(new ModeBO(dipModes[i].id, dipModes[i].name, dipModes[i].code, this.model.getDipKeysBO().sharePointUrl + dipModes[i].url + this.model.getUserContext().uidWithInitials, dipModes[i].link, dipModes[i].top));
        } else if (dipModes[i].id == 'globalsearch' && this.globalSearchInput) {
          this.modeBOs.push(new ModeBO(dipModes[i].id, dipModes[i].name, dipModes[i].code, this.model.getDipKeysBO().sharePointUrl + dipModes[i].url + this.globalSearchInput, dipModes[i].link, dipModes[i].top));
        } else {
          this.modeBOs.push(new ModeBO(dipModes[i].id, dipModes[i].name, dipModes[i].code, this.model.getDipKeysBO().sharePointUrl + dipModes[i].url, dipModes[i].link, dipModes[i].top));
        }

      } else {
        if (dipModes[i].id == 'profil' && this.model.getUserContext()) {
          this.modeBOs.push(new ModeBO(dipModes[i].id, dipModes[i].name, dipModes[i].code, "http://" + window.location.hostname + 'dipportal/' + dipModes[i].url + this.model.getUserContext().uidWithInitials, dipModes[i].link, dipModes[i].top));
        } else if (dipModes[i].id == 'globalsearch' && this.globalSearchInput) {
          this.modeBOs.push(new ModeBO(dipModes[i].id, dipModes[i].name, dipModes[i].code, "http://" + window.location.hostname + 'dipportal/' + dipModes[i].url + this.globalSearchInput, dipModes[i].link, dipModes[i].top));
        } else {
          this.modeBOs.push(new ModeBO(dipModes[i].id, dipModes[i].name, dipModes[i].code, "http://" + window.location.hostname + 'dipportal/' + dipModes[i].url, dipModes[i].link, dipModes[i].top));
        }
      }
    }
  }

  private searchFromCrm(customerNumber) {
    // console.log('searchFromCrm From Tane ', customerNumber);
    let observable = null;
    let obsclearcustomer = this.customer.clearCustomerContext();
    obsclearcustomer.subscribe(resp => {
      observable = this.customer.searchCustomerWithCustomerNo(customerNumber, null);
      observable.subscribe(
        response => {
          this.tabManager.openSCVTab();
          //  this.customer.insertOfsaaRecordSCV(resp.customerNumber + "", 0);
        }, error => {
          console.log("searchcustomerwith  - error : " + error);
        });
    });

  }



  private activate(name: string) {
    for (var i = 0; i < this.modeBOs.length; i++) {
      if (this.modeBOs[i].getName() === name || name.indexOf(this.modeBOs[i].getName()) > -1) {
        this.modeBOs[i].activate();
        this.activeModeBO = this.modeBOs[i];
      } else {
        this.modeBOs[i].deactivate()
      }
    }
  }

  public redirectToLogon() {
    this.utility.go('logon');
  }

  public go(path: string) {
    this.utility.go(path);
  }

  public dipModeUpdate() {
    this.retrieveDipModes();
  }

  public showMOKPopup(id:string){
    //get iamToken token from token service
    //console.log("showMOKPopup opening id is:"+id);
    try{
      //console.log("token service calling");
      let externalAppToken = this.rest.getIAMApplicationToken();
      //console.log("token service called")
      this.rest.getIAMApplicationToken().subscribe(
        response => {
          let tokenResponse= response.json();
          externalAppToken = tokenResponse.result.token;
          let url = "https://mobile-online-approval-qui-qui.kube.uatisbank/index.html?q=/static/qjsons/mokChoicePopup&id="+id+"&token="+externalAppToken;
          if (this.utility.isProd()) {
            url = "https://mobile-online-approval-qui-qui.kube.isbank/index.html?q=/static/qjsons/mokChoicePopup&id="+id+"&token="+externalAppToken;
          }
          console.log("iframe opening")
          this.mokIframeService.show(url);
          eval('document.querySelector("body").click()')
        }
      );
    }catch(e){
      console.log("token is failure exception:")
      this.messageBox.callMessageBox(MessageType.ERROR,"Özür dileriz, teknik nedenlerden dolayı işleminizi gerçekleştiremiyoruz. Lütfen daha sonra tekrar deneyiniz.","Mobil Onay Kodu")
      eval('document.querySelector(".modal-body").click()')  
    }

  }
}
