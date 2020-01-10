import fetch from '../util/fetch'
var qs = require('qs');

//登录
export function login(formdata) {
    // const data={
    //   file,name,op,code
    // }
    return fetch({
        url: '/mk_meeting/app/appLogin',
        method: 'post',
        data: formdata
    });
}
//截取code
export function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    // console.log(window.location.search);
    var r = window.location.search.substr(1).match(reg);
    // console.log(r);
    if (r != null) return unescape(r[2]);
    return null;
}
//检验是否为企业微信浏览器
export function isWeiXin() {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if (ua.match(/MicroMessenger/i) == 'micromessenger' && ua.match(/wxwork/i) == 'wxwork') {
        return true;
    } else {
        return false;
    }
}
//获取openid
export function getopenid(code) {
    return fetch({
        url: "https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxd8360a337f32c444&secret=2ebf3abf7637495d8a57f86b9274bfde&code=" + code + "&grant_type=authorization_code",
    });
}
//微信扫一扫
export function saosao(url) {
    return fetch({
        url: '/mk_meeting/app/getWxConfig?url=' + url,
    });
}

//首页公告
export function notice() {
    return fetch({
        url: '/mk_meeting/app/message/new',
    });
}
//个人信息显示
export function userInfo() {
    return fetch({
        url: '/mk_meeting/app/get/employee',
    });
}

//大会流程
export function dahui(status) {
    return fetch({
        url: '/mk_meeting/app/get/activitys?status=' + status,
    });
}
//research session
export function research() {
    return fetch({
        url: '/mk_meeting/app/get/activitys/research',
    });
}
//会议流程保存
export function mettingSave(ids) {
    const data = qs.stringify({ ids })
    return fetch({
        url: '/mk_meeting/app/post/activityEmployee',
        method: 'post',
        data: data
    })
}

//我的会议流程删除
export function mettingDel(id) {
    const data = qs.stringify({ id })
    return fetch({
        url: '/mk_meeting/app/delete/activityEmployee',
        method: 'post',
        data: data
    })
}
//会议详情内容
export function mettingDetail(id) {
    return fetch({
        url: '/mk_meeting/app/get/activity?id=' + id,
    })
}
//ps部门会议详情
export function pssession(id) {
    return fetch({
        url: '/mk_meeting/app/get/activitys/ps?id=' + id,
    })
}

//相册集
export function photos() {
    return fetch({
        url: '/mk_meeting/app/get/imgsList',
    })
}
//相册列表
export function photoLists(date) {
    return fetch({
        url: '/mk_meeting/app/get/imgs?groupBy=' + date,
    })
}


//晚宴弹幕发送
export function danmu(text) {
    const data = qs.stringify({ text })
    return fetch({
        url: '/mk_meeting/app/post/barrage',
        method: 'post',
        data: data
    })
}


//提问
//下拉框内容
export function qaSelect() {
    return fetch({
        url: '/mk_meeting/app/get/ask/activitys',
    })
}

export function qa(text) {
    const data = qs.stringify({ text })
    return fetch({
        url: '/mk_meeting/app/post/MeetingAsk',
        method: 'post',
        data: data
    })
}

//投票
export function voteSelect() {
    return fetch({
        url: '/mk_meeting/app/get/voteQuestions',
    })
}

export function vote(id) {
    return fetch({
        url: '/mk_meeting/app/get/voteQuestion/id?id=' + id,
    })
}

//问卷调查
export function quesnaire(arr) {
    const data = arr
    return fetch({
        url: '/mk_meeting/app/post/questionnaire/employee',
        method: 'post',
        data: data
    })
}

export function voteTou(questionId, answerId) {
    const data = qs.stringify({ questionId, answerId })
    return fetch({
        url: '/mk_meeting/app/post/answerEmployee',
        method: 'post',
        data: data
    })
}

//消息
export function prize() {
    return fetch({
        url: '/mk_meeting/app/get/lotteryEmployees',
    })
}
export function msg() {
    return fetch({
        url: '/mk_meeting/app/messages',
    })
}

//能否签到查看
export function qianCheck() {
    return fetch({
        url: '/mk_meeting/app/get/employee',
    })
}

//微信用户签到
export function wxCheck(flag) {
    const data = qs.stringify({ flag })
    return fetch({
        url: '/mk_meeting/app/put/employeeSign/wechat',
        method: "post",
        data: data
    })
}
//非微信用户签到
export function unwxCheck(flag, name, op) {
    const data = qs.stringify({ flag, name, op })
    return fetch({
        url: '/mk_meeting/app/put/employeeSign',
        method: "post",
        data: data
    })
}
//签到
export function check(flag) {
    const data = qs.stringify({ flag })
    return fetch({
        url: '/mk_meeting/app/put/employeeSign',
        method: "post",
        data: data
    })
}
//直接登录
export function relogin() {
    return fetch({
        url: '/mk_meeting/app/remember/me',
    })
}

//处理emoji表情

export function utf16toEntities(str) {
    var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
    str = str.replace(patt, function(char) {
        var H, L, code;
        if (char.length === 2) {
            H = char.charCodeAt(0);
            // 取出高位
            L = char.charCodeAt(1);
            // 取出低位
            code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00;
            //转换算法
            return "&#" + code + ";";
        } else {
            return char;
        }
    });
    return str;
}


//信息提交
export function fhInfoSumit(code) {
    const data = qs.stringify({ code})
    return fetch({
        url: '/api/home/search',
        method: 'post',
        data: data
    })
}
//信息提交
export function fhInfoSumit2(code) {
  const data = qs.stringify({ code})
  return fetch({
    url: '/api/home/search2',
    method: 'post',
    data: data
  })
}

//下载
export function exportExecl() {
    return fetch({
        url: '/api/home/export',
        method: 'get',
    })
}
