
const CryptoJS = require("crypto-js");

delete __filename;
delete __dirname;


window = global;

function watch(obj, name) {
    return new Proxy(obj, {
        get: function (target, property, receiver) {
            try {
                if (typeof target[property] === "function") {
                    console.log("对象 => " + name + ",读取属性:" + property + ",值为:" + 'function' + ",类型为:" + (typeof target[property]))
                } else {
                    console.log("对象 => " + name + ",读取属性:" + property + ",值为:" + target[property] + ",类型为:" + (typeof target[property]))
                }
            } catch (e) {
            }
            return target[property]
        },
        set: (target, property, newValue, receiver) => {
            try {
                console.log("对象 => " + name + ",设置属性:" + property + ",值为:" + newValue + ",类型为:" + (typeof newValue))
            } catch (e) {
            }
            return Reflect.set(target, property, newValue, receiver)
        }
    })
}
function obj_toString(obj,name){
    Object.defineProperty(obj,Symbol.toStringTag,{
        value:name,
    });
}

Node = function Node(){
    console.log("Node被调用了")
}

Element = function Element() {
  console.log("Element被调用了");
};

// 2. 设置原型链
Element.prototype = Object.create(Node.prototype);
Element.prototype.constructor = Element;
// 3. 伪装native code
Element.toString = () => 'function Element() { [native code] }';


function Window(){

}

window.sdt_source_init = true;
window.outerWidth = 1920;
window.outerHeight = 1040;
window.devicePixelRatio = 1;
// window.XMLHttpRequest = function (res){
//     console.log("当前执行的是window对象，XMLHttpRequest方法，参数：",res)
// }
XMLHttpRequest  = function XMLHttpRequest (){};
Window.prototype.setTimeout = function (){}
Window.prototype.setInterval = function (){}

// window =watch(window,"window")
Object.setPrototypeOf(window,Window.prototype)
function HTMLScriptElement(){
    this.tagName = "SCRIPT";
    this.parentNode = {
        removeChild:function (args){
            console.log("HTMLScriptElement===>parentNode===>removeChild===>",args)
        }
    };


}
function HTMLHtmlElement(){
    // 视口相关属性
    this.clientHeight = 952;    // 可视区域高度 (viewport)
    this.clientWidth = 933;     // 可视区域宽度 (viewport)

    // 文档总尺寸
    this.offsetHeight = 10338;  // 包含滚动内容的完整高度
    this.offsetWidth = 933;     // 包含边框的宽度

    // 滚动状态
    this.scrollHeight = 10338;  // 可滚动内容总高度
    this.scrollWidth = 1030;    // 可滚动内容总宽度
    this.scrollTop = 484.009;   // 当前垂直滚动位置

    // 元素标识
    this.tagName = "HTML";
    this.getAttribute = function (key){
        console.log("当前执行的是HTMLHtmlElement对象，getAttribute方法，参数：",key)
        if(key == 'dianshangji_tabid'){
            return null
        }
    }
}
function HTMLAllCollection(){
    this.length = 6154;
}

function HTMLHeadElement(){
    this.tagName = "HEAD";
    this.childElementCount = 34;
}
function HTMLBodyElement(){
    // 文档内容尺寸
    this.scrollHeight = 6141;  // 可滚动内容总高度
    this.scrollWidth = 1030;   // 可滚动内容总宽度

    // 视口尺寸
    this.clientHeight = 6141;  // 可视区域高度（含padding）
    this.clientWidth = 933;    // 可视区域宽度（含padding）

    // 元素标识
    this.tagName = "BODY";

    this.childElementCount = 37;

}
function WebGLDebugRendererInfo(){}
function CanvasRenderingContext2D(){
    // 颜色和样式
    this.fillStyle = "#000000";
    this.strokeStyle = "#000000";
    this.globalAlpha = 1;
    this.globalCompositeOperation = "source-over";

    // 阴影配置
    this.shadowBlur = 0;
    this.shadowColor = "rgba(0, 0, 0, 0)";
    this.shadowOffsetX = 0;
    this.shadowOffsetY = 0;

    // 线条样式
    this.lineWidth = 1;
    this.lineCap = "butt";
    this.lineJoin = "miter";
    this.miterLimit = 10;
    this.lineDashOffset = 0;

    // 文本样式
    this.font = "10px";
    this.textAlign = "start";
    this.textBaseline = "alphabetic";
    this.direction = "ltr";
    this.fontKerning = "auto";
    this.fontStretch = "normal";
    this.fontVariantCaps = "normal";
    this.letterSpacing = "0px";
    this.wordSpacing = "0px";
    this.textRendering = "auto";

    // 图像平滑
    this.imageSmoothingEnabled = true;
    this.imageSmoothingQuality = "low";

    // 滤镜效果
    this.filter = "none";
    this.fillRect = function (key1,key2,key3,key4){
        console.log("当前执行的是CanvasRenderingContext2D对象,fillRect方法，参数：",key1,key2,key3,key4)
        return undefined
    };
    this.arc = function (key1,key2,key3,key4,key5,key6){
        console.log("当前执行的是CanvasRenderingContext2D对象,arc方法，参数：",key1,key2,key3,key4,key5,key6)
        return undefined
    };
    this.stroke = function (){
        console.log("当前执行的是CanvasRenderingContext2D对象,stroke方法，")
        return undefined
    };
    this.fillText = function (key1,key2,key3){
        console.log("当前执行的是CanvasRenderingContext2D对象,fillText方法，参数：",key1,key2,key3)
        return undefined
    };
}
function WebGLRenderingContext(){
    this.drawingBufferColorSpace = "srgb";
    this.drawingBufferFormat = 32856;
    this.drawingBufferHeight = 150;
    this.drawingBufferWidth = 300;
    this.unpackColorSpace = "srgb";
    this.getExtension = function (res){
        console.log("当前执行的是：WebGLRenderingContext，getExtension，参数：", res)
        if(res.toLowerCase() == 'WEBGL_debug_renderer_info'){
            aaa = watch(new WebGLDebugRendererInfo(),"WebGLDebugRendererInfo")
            obj_toString(aaa,"WebGLDebugRendererInfo")
            return aaa
        }
    };
    this.createBuffer = function (res){
        console.log("当前执行的是：WebGLRenderingContext，getExtension，参数：", res)
        if(res.toLowerCase() == ''){

        }
    }
}
function HTMLCanvasElement(){
    this.tagName = "CANVAS";
    this.width = 300;
    this.writingSuggestions = "true";
    this.scrollHeight = 0;
    this.scrollLeft = 0;
    this.scrollTop = 0;
    this.scrollWidth = 0;
    this.height = 150;
    this.getContext = function (res){
        console.log("当前执行的是：HTMLCanvasElement对象，getContext方法，标签名：", res)
        if(res.toLowerCase() == 'webgl'){
            aaa = watch(new WebGLRenderingContext(),"WebGLRenderingContext")
            obj_toString(aaa,"WebGLRenderingContext")
            return aaa
        }
        if(res == '2d'){
            d2 = watch(new CanvasRenderingContext2D(),"CanvasRenderingContext2D")
            obj_toString(d2,"CanvasRenderingContext2D")
            return d2
        }
    };
    this.toDataURL = function (){
        console.log("当前执行的是：HTMLCanvasElement对象，toDataURL方法，标签名：")
    }
}
function HTMLCollection(){
    this.childElementCount = 37;
    this.length = 1;
    this.tagName = "HEAD";
    this.appendChild = undefined;
}
// Document
function HTMLDocument(){
    this.all = watch(new HTMLAllCollection(),"HTMLAllCollection");
    obj_toString(this.all,"HTMLAllCollection");
    this.cookie = 'areaId=20; ipLoc-djd=20-1715-0-0; PCSYCityID=CN_450000_450100_0; shshshfpa=8ad8d936-d934-99e4-96cd-830f3d4c05d0-1750302830; shshshfpx=8ad8d936-d934-99e4-96cd-830f3d4c05d0-1750302830; rkv=1.0; user-key=03459648-4faf-4d6a-8bbc-db4236de8281; cn=9; qrsc=3; unpl=JF8EALRnNSttCE1SVUtSHxMYTltVWw0OGB4LZ2UBB18NHFEHEwsTFkR7XlVdWRRKEB9vbxRUXVNOUQ4YCysSEXteU11bD00VB2xXVgQFDQ8WUUtBSUt-SFxUWFgIShAGZmUEZG1bS2QFGjIbFBRKX1VdWQ5LEAZpZw1WVF1IUAQfAisTIExtZG5dDUoQAGxXBGRcaAkAWRsDHhQZShBUWFkJSRYAa2EFU1heS1wHEgcYFhFPXWRfbQs; __jdv=76161171|baidu-search|t_262767352_baidusearch|cpc|201741064830_0_a77aaa5094704a7b89935b3df439895e|1750304668344; 3AB9D23F7A4B3C9B=3WV7LVEFDAPMYFJ64WTGVS6HXVX6V5Q57NNAAERKNKH67NXYNL4IYBYU7PIPEFELEZ6UXSC5JMPYJVNGYNYI5C7JNM; 3AB9D23F7A4B3CSS=jdd033WV7LVEFDAPMYFJ64WTGVS6HXVX6V5Q57NNAAERKNKH67NXYNL4IYBYU7PIPEFELEZ6UXSC5JMPYJVNGYNYI5C7JNMAAAAMXRMUSDTYAAAAACUM7UBUDXGGCWEX; jsavif=0; __jdu=17503025716471938425051; __jda=143920055.17503025716471938425051.1750302572.1750383683.1750386419.5; __jdc=143920055; shshshfpb=BApXSTqIhiPJALncmK3N3UCQE6niGirQKBhJxLx9o9xJ1MtK7To62; xapieid=jdd033WV7LVEFDAPMYFJ64WTGVS6HXVX6V5Q57NNAAERKNKH67NXYNL4IYBYU7PIPEFELEZ6UXSC5JMPYJVNGYNYI5C7JNMAAAAMXRMUSDTYAAAAACUM7UBUDXGGCWEX; jsavif=0';

}
// Object.defineProperty(HTMLDocument.prototype,"querySelector",{
//     enumerable:true,
//     writable:true,
//     configurable:true,
//     value:function querySelector(tagName){
//         console.log("当前执行的是HTMLDocument对象，querySelector方法，参数：",tagName)
//     }
// })
Object.defineProperty(HTMLDocument.prototype,"createElement",{
    enumerable:true,
    writable:true,
    configurable:true,
    value:function createElement(tagName){
        console.log("当前执行的是HTMLDocument对象，createElement方法，参数：",tagName)
        if(tagName.toLowerCase() == 'script'){
            script = watch(new HTMLScriptElement(),"HTMLScriptElement")
            obj_toString(script, "HTMLScriptElement")
            return script
        }if(tagName.toLowerCase() == 'canvas'){
            canvas = watch(new HTMLCanvasElement(),"HTMLCanvasElement")
            obj_toString(canvas, "HTMLCanvasElement")
            return canvas
        }
    }
})
Object.defineProperty(HTMLDocument.prototype,"createEvent",{
    enumerable:true,
    writable:true,
    configurable:true,
    value:function createEvent(tagName){
        console.log("当前执行的是HTMLDocument对象，createEvent方法，参数：",tagName)
    }
})
Object.defineProperty(HTMLDocument.prototype,"getElementsByTagName",{
    enumerable:true,
    writable:true,
    configurable:true,
    value:function getElementsByTagName(tagName){
        console.log("当前执行的是HTMLDocument对象，getElementsByTagName方法，参数：",tagName)
        if(tagName.toLowerCase() == 'head'){
            // console.log("当前执行的是HTMLDocument对象，getElementsByTagName方法，参数：head",tagName)
            htmlCollection = watch(new HTMLCollection(),"HTMLCollection")
            obj_toString(htmlCollection,"HTMLCollection")
            return [htmlCollection]
        }
    }
})
HTMLDocument.prototype.documentElement = watch(new HTMLHtmlElement(),"HTMLHtmlElement")
head = new HTMLHeadElement()
obj_toString(head,"HTMLHeadElement")
HTMLDocument.prototype.head = watch(head,"HTMLHeadElement")
body = new HTMLBodyElement()
HTMLDocument.prototype.body = watch(body,"HTMLBodyElement")
obj_toString(body,"HTMLBodyElement")
document = watch(new HTMLDocument(),"HTMLDocument")
document.referrer = ''
obj_toString(document,"HTMLDocument")


//Location
function Location(){
    // 基础URL组件
    this.href = "https://search.jd.com/Search?keyword=%E6%8B%96%E9%9E%8B&pvid=e1e3c2f8a43a4948b72c1121d6a5381c";
    this.protocol = "https:";
    this.host = "search.jd.com";
    this.hostname = "search.jd.com";
    this.origin = "https://search.jd.com";
    this.pathname = "/Search";
}
location = watch(new Location(),"Location")
obj_toString(location,"Location")

function MimeTypeArray(){
    this.length = 2;
}
//Navigator
function Navigator(){
    // 浏览器识别属性
    this.appCodeName = "Mozilla";
    this.appName = "Netscape";
    this.appVersion = "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36";
    this.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36";

    // 硬件信息
    this.hardwareConcurrency = 4;
    this.platform = "Win32";
    this.webdriver = false;
    this.language = {
        0:"zh-CN",
        1:"zh",
        length :2
    }

    mimeTypeArray = new MimeTypeArray();
    obj_toString(mimeTypeArray,"MimeTypeArray");
    this.mimeTypes = watch(mimeTypeArray,"MimeTypeArray");
    this.plugins = watch({
        "0": {
            "0": {},
            "1": {}
        },
        "1": {
            "0": {},
            "1": {}
        },
        "2": {
            "0": {},
            "1": {}
        },
        "3": {
            "0": {},
            "1": {}
        },
        "4": {
            "0": {},
            "1": {}
        },
        length:5
    }
    ,"Navigator.plugins")
}
navigator = watch(new Navigator(),"Navigator")
obj_toString(navigator,"Navigator")


//History
function History(){

}
history = watch(new History(),"History")
obj_toString(history,"History")


//Screen
function Screen(){
    this.availHeight = 1040;
    this.availLeft = 0;
    this.availTop = 0;
    this.availWidth = 1920;
    this.colorDepth = 24;
    this.height = 1080;
    this.width = 1920;
}
screen = watch(new Screen(),"Screen")
obj_toString(screen,"Screen")


//Storage
function Storage(){
    this.store = {},
    this.getItem = function (key){
        console.log("当前执行的是Storage对象，getItem方法，参数：",key)
        if(key == 'WQ_dy1_vk'){
            return '{"5.1":{"73806":{"e":31536000,"v":"gwdp3xxaxjqwh2h5","t":1750344586316},"f06cc":{"e":31536000,"v":"gwaidzxzdqaa02a7","t":1750344587705}}}'
        }
        if(key == "WQ_dy1_tk_algo"){
            return '{"gwdp3xxaxjqwh2h5":{"73806":{"v":"eyJ0ayI6InRrMDN3YTEwNDFjNDQxOG5wQk1EdjBPNGJORHc2YUF1eDRVdnl1a19xZDhLVWI2RUtSY0E0NlJ5NHl1UjBUZ3hTSE8yRWIwWEtxeUdRdXBwOTgxV3U4eHJ0U21YIiwiYWxnbyI6ImZ1bmN0aW9uIHRlc3QodGssZnAsdHMsYWksYWxnbyl7dmFyIHJkPSdBUUJ5aVJISDluMzAnO3ZhciBzdHI9XCJcIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uTUQ1KHN0cik7fSJ9","e":86400,"t":1750344586869}},"gwaidzxzdqaa02a7":{"f06cc":{"v":"eyJ0ayI6InRrMDN3YTZjYTFiNmUxOG5SVnl0TEVpcXVLZ3Y0NWZGSUtPQlFOSlloSUZNd0lDMDZXUnVzTHhTS0owZWdOaldVQ3dxOW1iTThQclVJWm5rT081MTh6TzY0NzlQIiwiYWxnbyI6ImZ1bmN0aW9uIHRlc3QodGssZnAsdHMsYWksYWxnbyl7dmFyIHJkPSdJVm9yNnIzQm9mZkonO3ZhciBzdHI9XCJcIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uTUQ1KHN0cik7fSJ9","e":86400,"t":1750344588055}}}'
        }
        if(key == 'WQ_gather_cv1'){
            return '{"v":"4ac349800c41d0b4ad4a894e2276335a","t":1750424914941,"e":31536000}'
        }if(key == 'WQ_gather_wgl1'){
            return '{"v":"43645f478c4a2815fcc73ce793195445","t":1750424914941,"e":31536000}'
        }

    };
    this.setItem = function(key, value) {
        console.log("当前执行的是Storage对象，setItem方法，参数：",key)
        this.store[key] = value;
    };


}

localStorage = watch(new Storage(),"Storage")
obj_toString(localStorage,"Storage")


// window = watch(window, 'window')
// document = watch(document, 'document')
// location = watch(location, 'location')
// navigator = watch(navigator, 'navigator')
// history = watch(history, 'history')
// screen = watch(screen, 'screen')
// localStorage = watch(localStorage, 'localStorage')



require('./demo31')

g = {"keyword":"拖鞋","qrst":"1","wq":"拖鞋","stock":"1","pvid":"1fcb8b1de7bf4a85950a6aa72660c598","isList":0,"page":"4","s":"54","click":"0","log_id":"1750485101043.8760","show_items":""}
h = {
    "area": "20",
    "enc": "utf-8",
    "adType": 7,
    "page": "4",
    "ad_ids": "291:20",
    "xtest": "new_search"
}
g.body = CryptoJS.SHA256(JSON.stringify(h)).toString()

window.PSign= new ParamsSign({
    appId: "f06cc",
    debug: false,
    preRequest:false,
    onSign: function(data){
    if(data && data.code && data.code!=200){ console.log(JSON.stringify(data)) }
    },
    onRequestTokenRemotely: function(data){
    if(data && data.code && data.code!=0){ console.log(JSON.stringify(data)) }
    },
    onRequestToken: function(data){
    if(data && data.code && data.code!=0){ console.log(JSON.stringify(data)) }
    }
});

console.log(g)
h5stParam = window.PSign._$sdnmd(g)

console.log("h5stParam:",h5stParam)

console.log(h5stParam["h5st"].length)