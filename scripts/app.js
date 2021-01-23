'use strict';

/**
 * @ngdoc overview
 * @name mettaApp
 * @description
 * # mettaApp
 *
 * Main module of the application.
 */
angular
  .module('mettaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'slickCarousel',
    'rzSlider',
    'ui.router',
    'darthwade.dwLoading'
  ])

  .run(function($rootScope,$location,$stateParams, $anchorScroll){
    $rootScope.$on('$stateChangeSuccess', function(event, toState){
      if($stateParams.scrollTo){
        $location.hash($stateParams.scrollTo);
        $anchorScroll();
      }
    });
  })
  .config(function ($routeProvider, $locationProvider,$stateProvider, $urlRouterProvider,$uiViewScrollProvider) {
    $locationProvider.hashPrefix('');
    $uiViewScrollProvider.useAnchorScroll();

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })

      .when('/currentAccounts', {
        templateUrl: 'views/currentaccounts.html',
        controller: 'CurrentaccountsCtrl',
        controllerAs: 'vm'
      })
      .when('/savingAccounts', {
        templateUrl: 'views/savingaccounts.html',
        controller: 'SavingaccountsCtrl',
        controllerAs: 'vm'
      })
      .when('/advanceAccounts', {
        templateUrl: 'views/advanceaccounts.html',
        controller: 'AdvanceaccountsCtrl',
        controllerAs: 'vm'
      })
      .when('/bankAccounts', {
        templateUrl: 'views/bankaccounts.html',
        controller: 'BankaccountsCtrl',
        controllerAs: 'vm'
      })
      .when('/bankAccounts', {
        templateUrl: 'views/bankaccounts.html',
        controller: 'BankaccountsCtrl',
        controllerAs: 'vm'
      })
      .when('/studentAcounts', {
        templateUrl: 'views/studentacounts.html',
        controller: 'StudentacountsCtrl',
        controllerAs: 'vm'
      })
      .when('/childrenAccount', {
        templateUrl: 'views/childrenaccount.html',
        controller: 'ChildrenaccountCtrl',
        controllerAs: 'vm'
      })
      .when('/creditCards', {
        templateUrl: 'views/creditcards.html',
        controller: 'CreditcardsCtrl',
        controllerAs: 'vm'
      })
      .when('/personalLoan', {
        templateUrl: 'views/personalloan.html',
        controller: 'PersonalloanCtrl',
        controllerAs: 'vm'
      })
      .when('/premierLoan', {
        templateUrl: 'views/premierloan.html',
        controller: 'PremierloanCtrl',
        controllerAs: 'vm'
      })
      .when('/carLoan', {
        templateUrl: 'views/carloan.html',
        controller: 'CarloanCtrl',
        controllerAs: 'vm'
      })
      .when('/debtConsolidationLoan', {
        templateUrl: 'views/debtconsolidationloan.html',
        controller: 'DebtconsolidationloanCtrl',
        controllerAs: 'vm'
      })
      .when('/homeImprovementLoan', {
        templateUrl: 'views/homeimprovementloan.html',
        controller: 'HomeimprovementloanCtrl',
        controllerAs: 'vm'
      })
      .when('/seeAllLoans', {
        templateUrl: 'views/seeallloans.html',
        controller: 'SeeallloansCtrl',
        controllerAs: 'seeAllLoans'
      })
      .when('/waysToInvest', {
        templateUrl: 'views/waystoinvest.html',
        controller: 'WaystoinvestCtrl',
        controllerAs: 'waysToInvest'
      })
      .when('/investInAnISA', {
        templateUrl: 'views/investinanisa.html',
        controller: 'InvestinanisaCtrl',
        controllerAs: 'investInAnISA'
      })
      .when('/investInFunds', {
        templateUrl: 'views/investinfunds.html',
        controller: 'InvestinfundsCtrl',
        controllerAs: 'investInFunds'
      })
      .when('/investInShares', {
        templateUrl: 'views/investinshares.html',
        controller: 'InvestinsharesCtrl',
        controllerAs: 'investInShares'
      })
      .when('/newToInvesting', {
        templateUrl: 'views/newtoinvesting.html',
        controller: 'NewtoinvestingCtrl',
        controllerAs: 'newToInvesting'
      })
      .when('/yourAdviceOptions', {
        templateUrl: 'views/youradviceoptions.html',
        controller: 'YouradviceoptionsCtrl',
        controllerAs: 'yourAdviceOptions'
      })
      .when('/faceToFaceFinancialAdvice', {
        templateUrl: 'views/facetofacefinancialadvice.html',
        controller: 'FacetofacefinancialadviceCtrl',
        controllerAs: 'faceToFaceFinancialAdvice'
      })
      .when('/homeInsurance', {
        templateUrl: 'views/homeinsurance.html',
        controller: 'HomeinsuranceCtrl',
        controllerAs: 'homeInsurance'
      })
      .when('/contentsInsurance', {
        templateUrl: 'views/contentsinsurance.html',
        controller: 'ContentsinsuranceCtrl',
        controllerAs: 'contentsInsurance'
      })
      .when('/studentInsurance', {
        templateUrl: 'views/studentinsurance.html',
        controller: 'StudentinsuranceCtrl',
        controllerAs: 'studentInsurance'
      })
      .when('/smallBusinessInsurance', {
        templateUrl: 'views/smallbusinessinsurance.html',
        controller: 'SmallbusinessinsuranceCtrl',
        controllerAs: 'smallBusinessInsurance'
      })
      .when('/lifeCover', {
        templateUrl: 'views/lifecover.html',
        controller: 'LifecoverCtrl',
        controllerAs: 'lifeCover'
      })
      .when('/criticalIllnessCover', {
        templateUrl: 'views/criticalillnesscover.html',
        controller: 'CriticalillnesscoverCtrl',
        controllerAs: 'criticalIllnessCover'
      })
      .when('/incomeProtectionInsurance', {
        templateUrl: 'views/incomeprotectioninsurance.html',
        controller: 'IncomeprotectioninsuranceCtrl',
        controllerAs: 'incomeProtectionInsurance'
      })
      .when('/travelInsurance', {
        templateUrl: 'views/travelinsurance.html',
        controller: 'TravelinsuranceCtrl',
        controllerAs: 'travelInsurance'
      })
      .when('/financialHealthSupport', {
        templateUrl: 'views/financialhealthsupport.html',
        controller: 'FinancialhealthsupportCtrl',
        controllerAs: 'financialHealthSupport'
      })
      .when('/financialFitness', {
        templateUrl: 'views/financialfitness.html',
        controller: 'FinancialfitnessCtrl',
        controllerAs: 'financialFitness'
      })
      .when('/financialFitnessScoreTool', {
        templateUrl: 'views/financialfitnessscoretool.html',
        controller: 'FinancialfitnessscoretoolCtrl',
        controllerAs: 'financialFitnessScoreTool'
      })
      .when('/everydayBudgeting', {
        templateUrl: 'views/everydaybudgeting.html',
        controller: 'EverydaybudgetingCtrl',
        controllerAs: 'everydayBudgeting'
      })
      .when('/managingDebt', {
        templateUrl: 'views/managingdebt.html',
        controller: 'ManagingdebtCtrl',
        controllerAs: 'managingDebt'
      })
      .when('/growingYourMoney', {
        templateUrl: 'views/growingyourmoney.html',
        controller: 'GrowingyourmoneyCtrl',
        controllerAs: 'growingYourMoney'
      })
      .when('/stayingSafe', {
        templateUrl: 'views/stayingsafe.html',
        controller: 'StayingsafeCtrl',
        controllerAs: 'stayingSafe'
      })
      .when('/learningAboutMoney', {
        templateUrl: 'views/learningaboutmoney.html',
        controller: 'LearningaboutmoneyCtrl',
        controllerAs: 'learningAboutMoney'
      })
      .when('/digitalBanking', {
        templateUrl: 'views/digitalbanking.html',
        controller: 'DigitalbankingCtrl',
        controllerAs: 'digitalBanking'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl',
        controllerAs: 'help'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm'
      })
      .when('/coronavirus', {
        templateUrl: 'views/coronavirus.html',
        controller: 'CoronavirusCtrl',
        controllerAs: 'coronavirus'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'vm'
      })
      .when('/CoronavirusReliefOptions', {
        templateUrl: 'views/coronavirusreliefoptions.html',
        controller: 'CoronavirusreliefoptionsCtrl',
        controllerAs: 'vm'
      })
      .when('/LoanCalculator', {
        templateUrl: 'views/loancalculator.html',
        controller: 'LoancalculatorCtrl',
        controllerAs: 'vm'
      })
      .when('/BenefitOptions', {
        templateUrl: 'views/benefitoptions.html',
        controller: 'BenefitoptionsCtrl',
        controllerAs: 'vm'
      })
      .when('/ApplyForGrant', {
        templateUrl: 'views/applyforgrant.html',
        controller: 'ApplyforgrantCtrl',
        controllerAs: 'vm'
      })
      .when('/ApplyForLoan', {
        templateUrl: 'views/applyforloan.html',
        controller: 'ApplyforloanCtrl',
        controllerAs: 'vm'
      })
      .when('/processing', {
        templateUrl: 'views/processing.html',
        controller: 'ProcessingCtrl',
        controllerAs: 'vm'
      })
      .when('/breakdown', {
        templateUrl: 'views/breakdown.html',
        controller: 'BreakdownCtrl',
        controllerAs: 'vm'
      })
      .when('/congratulation', {
        templateUrl: 'views/congratulation.html',
        controller: 'CongratulationCtrl',
        controllerAs: 'vm'
      })
      .when('/transferOnProgress', {
        templateUrl: 'views/transferonprogress.html',
        controller: 'TransferonprogressCtrl',
        controllerAs: 'vm'
      })
      .when('/transferForm', {
        templateUrl: 'views/transferform.html',
        controller: 'TransferformCtrl',
        controllerAs: 'vm'
      })
      .when('/transferEnd', {
        templateUrl: 'views/transferend.html',
        controller: 'TransferendCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });


  });
