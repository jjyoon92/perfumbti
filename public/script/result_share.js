const test_thumbnail_image ='https://iridescent-22bdc.web.app/images/mbti_thumbnail.jpg';
var mbti = '';


// 결과 페이지 공유 버튼
function kakaoResultShare() {
    mbti = $('#resultMbti').val();
    console.log(mbti);   
    countData.doc("share_count").get().then((snapshot) => {
        var kakaoCount = snapshot.data()["kakaotalk"];
        countData.doc("share_count").update({
            kakaotalk: kakaoCount + 1
        });
    }).catch(err => {
        console.log('Error getting documents', err);
    });

    const shareTitle = "나를 닮은 향수 선물 테스트\n내가 선물 받은 나를 닮은 향수는...";
    const shareImage = 'https://iridescent-22bdc.web.app/images/mbti_result/result_thumbnails/result_share_' + mbti + '.jpeg';
    // location.href = 'https://iridescent-22bdc.web.app/images/mbti_result/result_share_' + mbti + '.jpeg';
    const shareURL = 'https://iridescent-22bdc.web.app/pages/result_' + mbti + '.html';
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,                        
            description: '#향수 #선물 #나를 닮은 향수 #MBTI',
            imageUrl: shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL
            },
        },
        buttons: [{
            title: '선물 확인',
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL
            },
        }, {
            title: '테스트 하기',
            link: {
                mobileWebUrl: 'https://iridescent-22bdc.web.app/',
                webUrl: 'https://iridescent-22bdc.web.app/'
            },
        }, ],

    });
}

function shareResultFacebook() {
    mbti = $('#resultMbti').val();
    console.log(mbti);
    var sendUrl = "https://iridescent-22bdc.web.app/pages/result_" + mbti + ".html";
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

function shareResultTwitter() {
    mbti = $('#resultMbti').val();
    console.log(mbti);
    var sendText = "내가 받은 나를 닮은 향수 테스트 결과";
    var sendUrl = "https://iridescent-22bdc.web.app/pages/result_" + mbti + ".html";
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}
$("#btnResultFacebook").click(function () {
    countData.doc("share_count").get().then((snapshot) => {
        var facebookCount = snapshot.data()["facebook"];
        countData.doc("share_count").update({
            facebook: facebookCount + 1
        });
    }).catch(err => {
        console.log('Error getting documents', err);
    });
    shareResultFacebook();
});
$("#btnResultTwitter").click(function () {
    countData.doc("share_count").get().then((snapshot) => {
        var twitterCount = snapshot.data()["twitter"];
        countData.doc("share_count").update({
            twitter: twitterCount + 1
        });
    }).catch(err => {
        console.log('Error getting documents', err);
    });
    shareResultTwitter();
});
$('.link_share').click(function () {
    countData.doc("share_count").get().then((snapshot) => {
        var copyCount = snapshot.data()["link_copy"];
        countData.doc("share_count").update({
            link_copy: copyCount + 1
        });
    }).catch(err => {
        console.log('Error getting documents', err);
    });
    result_clip();
});

function result_clip() {
    var url = '';
    mbti = $('#resultMbti').val();
    console.log(mbti);
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    // url = window.document.location.href;
    url = "https://iridescent-22bdc.web.app/pages/result_" + mbti + ".html";
    textarea.value = "https://iridescent-22bdc.web.app/pages/result_" + mbti + ".html";
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}




function moveHome() {
    location.href = "/index.html";
    num = 1;
    $(".question").hide();
    $(".question").removeClass("act");
    $(".question").removeClass("loading_block");
    $(".container").removeClass("c_act");
    $(".result").hide();
    $(".start").show();
    $("#footer").show();
    $("#footer").removeClass("hide");
    $('html, body').animate({
        scrollTop: 0
    }, 300);
}