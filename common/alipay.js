
function startApp(args) {
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "alipays://platformapi/startapp?" + args,
        packageName: "com.eg.android.AlipayGphone"
    });
}
function startApp2(args) {
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "alipayqr://platformapi/startapp?" + args,
        packageName: "com.eg.android.AlipayGphone"
    });
}

class AppId {
    /**
     * 支付宝付款（跳转支付宝转账向商家付款界面）
     */
    static MerchantPayment = 20000056;
    /**
     * 支付宝记账（跳转支付宝记账界面）
     */
    static AccountBook = 20000168;
    /**
     * 支付宝滴滴
     */
    static Didi = 20000778;
    /**
     * 支付宝账单
     */
    static BillPage = 20000003;
    /**
     * 支付宝登陆界面
     */
    static LoginPage = 20000008;
    /**
     * 支付宝我的银行卡
     */
    static MyBankCard = 20000014;
    /**
     * 支付宝余额
     */
    static Balance = 20000019;
    /**
     * 支付宝余额宝
     */
    static YuEBAO = 20000032;
    /**
     * 支付宝饿了么
     */
    static Ele = 20000120;
    /**
     * 支付宝自选股
     */
    static OptionalShares = 20000134;
    /**
     * 支付宝会员
     */
    static Member = 20000160;
    /**
     * 支付宝定期
     */
    static Regular = 20000165;
    /**
     * 支付宝通讯录
     */
    static MailList = 20000166;
    /**
     * 支付宝生活缴费
     */
    static LivingPayment = 20000193;
    /**
     * 支付宝花呗
     */
    static Flowers = 20000199;
    /**
     * 支付宝黄金
     */
    static Gold = 20000218 ;
    /**
     * 支付宝总资产
     */
    static totalAssets = 20000243;
    /**
     * 支付宝我的快递
     */
    static MyExpress = 20000754;
    /**
     * 支付宝基金
     */
    static Fund = 20000793;
    /**
     * 支付宝语音助手
     */
    static VoiceAssistant = 20000835;
    /**
     * 支付宝充值中心
     */
    static VoucherCenter = 20000987;
    /**
     * 支付宝搜索
     */
    static Search = 20001003;
    /**
     * 支付宝流量钱包
     */
    static TrafficWallet = 60000057;
    /**
     * 支付宝商家服务
     */
    static MerchantServices = 60000081;
    /**
     * 支付宝共享单车
     */
    static SharedBike = 60000155;
    /**
     * 支付宝蚂蚁庄园
     */
    static AntManor = 66666674;
    /**
     * 支付宝余利宝
     */
    static YuLiBao = 66666708;
    /**
     * 支付宝惠支付
     */
    static AlipayPayment = 68687009;
    /**
     * 支付宝养老
     */
    static AlipayPension = 68687131;
    /**
     * 支付宝余额宝
     */
    static YuEBAO2 = 77700124;
}

class SaId {
    /**
     * 支付宝转账（跳转支付宝转账界面）
     */
    static Transfer = 20000116;
    /**
     *支付宝手机充值（跳转支付宝手机充值页面）
     */
    static PhoneRecharge = 10000003;
    /**
     * 支付宝卡包（跳转支付宝卡包页面）
     */
    static CardBag = 20000021;
    /**
     * 支付宝吱口令（跳转支付宝吱口令页面）
     */
    static SqueakPassword = 20000085;
    /**
     * 支付宝芝麻信用（跳转支付宝芝麻信用页面）
     */
    static SesameCredit = 20000118;
    /**
     * 支付宝红包（跳转支付宝红包页面）
     */
    static PaymentRedPacket = 88886666;
    /**
     * 支付宝爱心（跳转支付宝献爱心页面）
     */
    static OfferLove = 1000009;
    /**
     * 支付宝升级页面（跳转支付宝升级页面）
     */
    static upgrade = 2000066;
    /**
     * 支付宝滴滴打的（跳转支付宝滴滴打的页面）
     */
    static DidiOpenDrip = 2000130;
    /**
     * 支付宝客服（跳转支付宝客服页面）
     */
    static CustomerService = 2000691;
    /**
     * 支付宝生活（跳转支付宝生活页面）
     */
    static Life = 2000193;
    /**
     * 支付宝生活号（跳转支付宝生活号页面）
     */
    static LifeNumber = 2000101;
    /**
     * 支付宝记账（跳转支付宝记账页面）
     */
    static Bookkeeping = 2000168;
    /**
     * 支付宝收款码
     */
    static CollectionCode = 20000123;
    /**
     * 支付宝扫一扫（跳转支付宝扫一扫）
     */
    static ScanQrcode = 10000007;
    /**
     * 其他·
     * //升级下载页
     * 20000217
alipays://platformapi/startapp?appId=20000217

alipays://platformapi/startapp?appId=20000131

alipays://platformapi/startapp?appId=20001688

alipays://platformapi/startapp?appId=20000202

alipays://platformapi/startapp?appId=20000196

alipays://platformapi/startapp?appId=20000238

alipays://platformapi/startapp?appId=20000004

alipays://platformapi/startapp?appId=20000006

alipays://platformapi/startapp?appId=63300030

alipays://platformapi/startapp?appId=63300079

alipays://platformapi/startapp?appId=63300091
     */
}

module.exports = class Alipay {
    static AppId=AppId;
    static SaId=SaId;
    /**
     * 使用二维码打开
     * @param {*} codeUrl 二维码地址
     */
    static qrCode(codeUrl) {
        // intent://platformapi/startapp?saId=10000007&qrcode=%68%74%74%70%73%3A%2F%2F%71%72%2E%61%6C%69%70%61%79%2E%63%6F%6D%2F%66%6B%78%30%33%36%33%36%31%72%78%77%39%6D%77%34%65%39%7A%6E%31%66%32%3F%5F%73%3D%77%65%62%2D%6F%74%68%65%72
        startApp("appId=10000007&qrcode=" + encodeURIComponent(codeUrl))
    }
    /**
     * 到支付宝转账界面
     */
    static toTransferAlipay() {
        startApp("appId=09999988&actionType=toAccount&goBack=NO")
    }
    /**
     * 到支付宝转到银行卡界面
     */
     static toTransferBank() {
        startApp("appId=09999988&actionType=toCard&goBack=NO")
    }
    /**
     * 转到支付宝
     * @param {*} userId 用户id
     * @param {*} money 转账金额
     * @param {*} memo 备注
     */
    static transferAlipay(userId, money, memo = "") {
        startApp(`appId=09999988&actionType=toAccount&goBack=NO&amount=${money}&userId=${userId}&memo=${memo}`)
    }
    static transferBank(){
        //intent://platformapi/startapp?appId=09999988&from=pc&actionType=toCard&sourceId=bill&cardNo=%E5%8D%A1%E5%8F%B7&bankAccount=%E5%A7%93%E5%90%8D&money=1&amount=1&bankMark=CCB&bankName=%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E9%93%B6%E8%A1%8C
        //https://ds.alipay.com/?from=pc&appId=09999988&actionType=toCard&sourceId=bill&cardNo=%E5%8D%A1%E5%8F%B7&bankAccount=%E5%A7%93%E5%90%8D&money=1&amount=1&bankMark=CCB&bankName=%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E9%93%B6%E8%A1%8C
    }
    /**
     * 打开蚂蚁森林
     */
    static openPageAntForest() {
        startApp(`appId=60000002`)
    }
    /**
     * 支付宝付款（跳转支付宝转账向商家付款界面）
     */
    static openPageMerchantPayment() {
        startApp(`appId=20000056`)
    }


    /**
     * 唤起支付宝应用
     * @param {*} appId appid
     */
    static startApp(appId = "") {
        startApp(`appId=${appId}`)
    }

    /**
     * 唤起支付宝应用
     * @param {*} saId saId
     */
    static startAppsa(saId = "") {
        startApp2(`saId=${saId}`)
    }
}