function addEvent(obj, evType, fn) 
{ 
	if(obj.addEventListener) 
	{ 
	obj.addEventListener(evType, fn, false); 
	return true; 
	} 
	else if (obj.attachEvent) 
	{ 
	var r = obj.attachEvent('on'+evType, fn); 
	return r; 
	} 
	else 
	{return false;} 
}



window.onload = function(){
/*
var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Mobile', 'Symbian', 'Opera Mobi', 'Opera Mini', 'IEmobile', 'HTC', 'webOS');
for (var word in mobileKeyWords){
   if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			alert('모바일 접속이 확인되어, 모바일 전용 페이지로 이동합니다.');
			 window.location.href = "http://m.tourinsu.co.kr/";
	   break;
		 }
}
*/

	/* 해더 메뉴  */
	$('.tab_2 li').mouseover(function(){
		switch(this.className){
			case '1' : $('.header_tab div').html('<a href="/policy_01.html"><span class="tab1">해외여행</span></a><a href="/policy_02.html"><span>국내여행</span></a><a href="/policy_03.html"><span>장기체류</span></a><a href="/policy_04.html"><span>스키보험</span></a>'); break;
			case '2' : $('.header_tab div').html('<a href="/check_insurance.html"><span class="tab2">보험료알아보기</span></a>'); break;
			case '3' : $('.header_tab div').html('<a href="/application.html"><span class="tab3">실시간보험가입(B2C)</span></a><a href="/email.html"><span>이메일보험가입신청</span></a><a href="/b2b/join_login.html"><span>제휴기관(B2B)가입</span></a><a href="/app_modify.html"><span>보험계약 수정·취소신청</span></a><a href="/join_eng/branch_index2.html"><span>해외지사(Branch Network)</span></a>'); break;
			case '4' : $('.header_tab div').html('<a href="/inquiry.html"><span class="tab4">계약조회 및 가입확인</span></a><a href="/search_email.html"><span>이메일보험가입 처리현황</span></a><a href="/accident.html"><span>사고처리 진행상황</span></a><a href="/hospital.html"><span>제휴병원 조회</span></a>'); break;
			case '5' : $('.header_tab div').html('<a href="/download.html"><span class="tab5">다운로드</span></a><a href="/claim.html"><span>보험금 청구 구비서류</span></a><a href="/claim_request.html"><span>보험금 구비서류 신청</span></a><a href="/join_eng.html"><span>영문가입증명서 신청</span></a><a href="/death_benefit.html"><span>사망보험금 수익자 변경</span></a>'); break;
			case '6' : $('.header_tab div').html('<a href="/notice_01.html"><span class="tab6">공지</span></a><a href="/notice_02.html"><span>자주하는질문</span></a><a href="/notice_03.html"><span>Q&amp;A</span></a><a href="/notice_04.html"><span>고객의 소리</span></a><a href="/notice_05.html"><span>결제모듈설치안내</span></a>'); break;
		}
		var header_tab = document.getElementById('header_tab');
		if(header_tab.style.display == 'none'){
			$('.header_tab').slideDown();
		}
	});
	$('html').mouseover(function(evt){
		if(evt.clientY >= 170){
			$('.header_tab').slideUp()
		}
	});

		var image=0;
		var now=0;
		image=$("#m_hos img").size();
		$("#m_hos img").each(function (i) { if($(this).css('display')!='none'){ now=i; } });

		$("#r_sign").click(function() {
			now++;
			if(now>=image) now=0;
			$("#m_hos img").each(function (i) { if(i==now){ $(this).show(); } else { $(this).hide(); } });
		});
		$("#l_sign").click(function() {
			now--;
			if(now<0) now=image-1;
			$("#m_hos img").each(function (i) { if(i==now){ $(this).show(); } else { $(this).hide(); } });
		});
		$("#m_hos").click(function() {
			$(location).attr('href', '/company_03.html');	
		});
		
	var event_page = document.getElementById('event_page');
	if(event_page != null){
		$( ".bro_img img" ).click(function() {
				var img_url = $(this).attr('src');
				var bro_show_img = document.getElementById('bro_show_img');
				var bro_show_div = document.getElementById('bro_show_d');
				bro_show_img.src = img_url;
				$(bro_show_div).css("display", "block");
				$(bro_show_img).css("width", "700px;");
//			document.getElementById('bro_show').style.display = "block";
		});

		$("#show_A").click(function() {
			var bro_show_img = document.getElementById('bro_show_img');
			var img_src = $(bro_show_img).attr('src');
			var img_now = Number(img_src.substr(-5, 1));

			now = img_now - 1;
			if(now < 1 ) {
				now='6';
			}			
			bro_show_img.src = "/main/images/bro_" + now + ".png";

		});
		$("#show_B").click(function() {
			var bro_show_img = document.getElementById('bro_show_img');
			var img_src = $(bro_show_img).attr('src');
			var img_now = Number(img_src.substr(-5, 1));

			now = img_now + 1;
			if(now > 6 ) {
				now='1';
			}			
			bro_show_img.src = "/main/images/bro_" + now + ".png";
		});
	}

	var application_2 = document.getElementById('application_2');

	if(application_2 != null){
		var all_agree = 0;
		addEvent(application_2.agree_1,'click', function(){
			if(all_agree == 0){
				application_2.agree_2.checked = true;
				application_2.in_ck_1.checked = true;
				application_2.in_ck_2.checked = true;
				application_2.in_ck_3.checked = true;
				application_2.in_ck_4.checked = true;
				application_2.in_ck_5.checked = true;
				application_2.in_ck_6.checked = true;
				application_2.in_ck_7.checked = true;
				application_2.in_ck_8.checked = true;
				application_2.in_ck_9.checked = true;
				application_2.in_ck_10.checked = true;
				application_2.agree_3.checked = true;
				application_2.agree_4.checked = true;
				application_2.agree_5.checked = true;
				application_2.agree_6.checked = true;
				application_2.agree_7.checked = true;
				application_2.agree_8.checked = true;
				all_agree = 1;
			}
			else{
				application_2.agree_2.checked = false;
				application_2.in_ck_1.checked = false;
				application_2.in_ck_2.checked = false;
				application_2.in_ck_3.checked = false;
				application_2.in_ck_4.checked = false;
				application_2.in_ck_5.checked = false;
				application_2.in_ck_6.checked = false;
				application_2.in_ck_7.checked = false;
				application_2.in_ck_8.checked = false;
				application_2.in_ck_9.checked = false;
				application_2.in_ck_10.checked = false;
				application_2.agree_3.checked = false;
				application_2.agree_4.checked = false;
				application_2.agree_5.checked = false;
				application_2.agree_6.checked = false;
				application_2.agree_7.checked = false;
				application_2.agree_8.checked = false;

				all_agree = 0;
			}
		});




		var dis_agree = document.getElementById('dis_agree');
		addEvent(dis_agree,'click', function(){
			alert('약관에 동의해야만 가입할 수 있습니다.');
		});

		window.application_2.onsubmit = function(){
			if(application_2.agree_2.checked == false)
			{
				alert('이용약관에 동의하셔야 합니다.');
				application_2.agree_2.focus();
				return false;
			}
			if(application_2.in_ck_1.checked == false)
			{
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				application_2.in_ck_1.focus();
				return false;
			}
			if(application_2.in_ck_2.checked == false)
			{
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				application_2.in_ck_2.focus();
				return false;
			}
			if(application_2.in_ck_3.checked == false)
			{
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				application_2.in_ck_3.focus();
				return false;
			}
			if(application_2.in_ck_4.checked == false)
			{
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				application_2.in_ck_4.focus();
				return false;
			}
			if(application_2.in_ck_5.checked == false)
			{
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				application_2.in_ck_5.focus();
				return false;
			}
			if(application_2.in_ck_6.checked == false)
			{
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				application_2.in_ck_6.focus();
				return false;
			}
			if(application_2.in_ck_7.checked == false)
			{
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				application_2.in_ck_7.focus();
				return false;
			}
			if(application_2.in_ck_8.checked == false)
			{
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				application_2.in_ck_8.focus();
				return false;
			}
			if(application_2.in_ck_9.checked == false)
			{
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				application_2.in_ck_9.focus();
				return false;
			}
			if(application_2.in_ck_10.checked == false)
			{
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				application_2.in_ck_10.focus();
				return false;
			}
			if(application_2.agree_3.checked == false)
			{
				alert('이용약관에 동의하셔야 합니다.');
				application_2.agree_3.focus();
				return false;
			}
			if(application_2.agree_4.checked == false)
			{
				alert('이용약관에 동의하셔야 합니다.');
				application_2.agree_4.focus();
				return false;
			}
			if(application_2.agree_5.checked == false)
			{
				alert('개인(신용)정보의 수집·이용에 동의하셔야 합니다.');
				application_2.agree_5.focus();
				return false;
			}
			if(application_2.agree_6.checked == false)
			{
				alert('개인(신용)정보의 조회에 동의하셔야 합니다.');
				application_2.agree_6.focus();
				return false;
			}
			if(application_2.agree_7.checked == false)
			{
				alert('개인(신용)정보의 제공에 동의하셔야 합니다.');
				application_2.agree_7.focus();
				return false;
			}
			if(application_2.agree_8.checked == false)
			{
				alert('민감정보의 및 고유식별정보의 처리에 동의하셔야 합니다.');
				application_2.agree_8.focus();
				return false;
			}
var a = document.application_2.jumin_1;
var b = document.application_2.jumin_2;
var c = document.application_2.agree_nm;
var pyear = a.value.substr(0, 2);
var pmonth = a.value.substr(2, 2);
var pday = a.value.substr(4, 2);
var pj = b.value.substr(0, 1);
var jumin1 = a.value.substr(0,6);
var jumin2 = b.value.substr(0,7);	
	
	if(c.value == "") {
		alert ("이름을 입력해주세요.");
	c.focus();
	return false; 
	}
	if(a.value == "") {
		alert ("주민번호를 입력해주세요.");
	a.focus();
	return false; 
	}
	if(a.value.length < "6") {
		alert ("주민번호를 정확히 입력해주세요.");
		a.value ="";
		b.value ="";
		a.focus();
	return false; 
	}	
	if(b.value == "") {
		alert ("주민번호를 입력해주세요.");
	b.focus();
	return false; 
	}
	if(b.value.length < "7") {
		alert ("주민번호를 정확히 입력해주세요.");
		a.value ="";
		b.value ="";
		a.focus();
	return false; 
	}	


	if (pmonth > 12){
		alert ("주민번호를 정확히 입력해주세요");
		a.value ="";
		b.value ="";
		a.focus();
		return false;
	}
	if (pday > 31){
		alert ("주민번호를 을 정확히 입력해주세요");
		a.value ="";
		b.value ="";
		a.focus();
		return false;
	}

	if (b.value.length == "7") {

    var sum = 0;
    sum += jumin1.charAt(0)*2;
    sum += jumin1.charAt(1)*3;
    sum += jumin1.charAt(2)*4;
    sum += jumin1.charAt(3)*5;
    sum += jumin1.charAt(4)*6;
    sum += jumin1.charAt(5)*7;
    sum += jumin2.charAt(0)*8;
    sum += jumin2.charAt(1)*9;
    sum += jumin2.charAt(2)*2;
    sum += jumin2.charAt(3)*3;
    sum += jumin2.charAt(4)*4;
    sum += jumin2.charAt(5)*5;

    check = (11 - sum % 11) % 10;

    if (jumin2.charAt(6) != check || (jumin1.length != 6 && jumin2.length != 7))
    {
		alert ("잘못된 주민번호 입니다.");
		a.value = "";
		b.value = "";
		a.focus();
      return false;
    } 

    if(!(jumin2.charAt(0) == '1' || jumin2.charAt(0)  == '2' || jumin2.charAt(0) == '3' || jumin2.charAt(0) == '4'))
    {
		alert ("잘못된 주민번호 입니다.");
		a.value = "";
		b.value = "";
		a.focus();
      return false;
    }
	}
			return true;
		}
	}

  var req_email_1 =  document.getElementById('req_email_1');
	if(req_email_1 != null){
		$("#req_email_1").click(function() {
			location.replace("/search_email.html");
		});
	}
	var idx_maps = document.getElementById("wld_branch");
	if(idx_maps != null) {
		$( "#wld_branch" ).click(function() {
			$("#wld_branch").css({"background-image":"url(/main/images/btn_bg.jpg)", "color":"#fff"});
			$("#hos_kor").css({"background-image":"none", "color":"#000"});
			$("#hos_abr").css({"background-image":"none", "color":"#000"});
			$("#simple_map").attr("src", "/simple_map.html?tab=a");
			$("#tab_3_a").css("display", "block");
			$("#tab_3_b").css("display", "none");
			$("#tab_3_c").css("display", "none");
		});
		$( "#hos_kor" ).click(function() {
			$("#wld_branch").css({"background-image":"none", "color":"#000"});
			$("#hos_kor").css({"background-image":"url(/main/images/btn_bg.jpg)", "color":"#fff"});
			$("#hos_abr").css({"background-image":"none", "color":"#000"});
			$("#simple_map").attr("src", "/simple_map.html?tab=1");
			$("#tab_3_a").css("display", "none");
			$("#tab_3_b").css("display", "block");
			$("#tab_3_c").css("display", "none");		
		});
		$( "#hos_abr" ).click(function() {
			$("#wld_branch").css({"background-image":"none", "color":"#000"});
			$("#hos_kor").css({"background-image":"none", "color":"#000"});
			$("#hos_abr").css({"background-image":"url(/main/images/btn_bg.jpg)", "color":"#fff"});		
			$("#simple_map").attr("src", "/simple_map.html?tab=2");
			$("#tab_3_a").css("display", "none");
			$("#tab_3_b").css("display", "none");
			$("#tab_3_c").css("display", "block");		
		});	
	}
	var email_frm = document.getElementById('email_frm');

	if(email_frm != null){
		var all_agree = 0;
		addEvent(email_frm.agree_1,'click', function(){
			if(all_agree == 0){
				email_frm.agree_2.checked = true;
				email_frm.in_ck_1.checked = true;
				email_frm.in_ck_2.checked = true;
				email_frm.in_ck_3.checked = true;
				email_frm.in_ck_4.checked = true;
				email_frm.in_ck_5.checked = true;
				email_frm.in_ck_6.checked = true;
				email_frm.in_ck_7.checked = true;
				email_frm.in_ck_8.checked = true;
				email_frm.in_ck_9.checked = true;
				email_frm.in_ck_10.checked = true;
				email_frm.agree_3.checked = true;
				email_frm.agree_4.checked = true;
				email_frm.agree_5.checked = true;
				email_frm.agree_6.checked = true;
				if(email_frm.agree_7) { email_frm.agree_7.checked = true; }
				if(email_frm.agree_12) { email_frm.agree_12.checked = true; }
				all_agree = 1;
			}
			else{
				email_frm.agree_2.checked = false;
				email_frm.in_ck_1.checked = false;
				email_frm.in_ck_2.checked = false;
				email_frm.in_ck_3.checked = false;
				email_frm.in_ck_4.checked = false;
				email_frm.in_ck_5.checked = false;
				email_frm.in_ck_6.checked = false;
				email_frm.in_ck_7.checked = false;
				email_frm.in_ck_8.checked = false;
				email_frm.in_ck_9.checked = false;
				email_frm.in_ck_10.checked = false;
				email_frm.agree_3.checked = false;
				email_frm.agree_4.checked = false;
				email_frm.agree_5.checked = false;
				email_frm.agree_6.checked = false;
				if(email_frm.agree_7) { email_frm.agree_7.checked = false; }
				if(email_frm.agree_12) { email_frm.agree_12.checked = false; }
				all_agree = 0;
			}
		});

	
	var a = email_frm.email_1;
	var b = email_frm.email_2;
	var c = email_frm.email_3;
	var d = email_frm.email_4;
		function btn_listener(){
			if((a.value != '' && b.value != '0' && b.value != "write" ) || (a.value != '' && b.value == "write" && c.value != '')) {
				if(a.value != '' && b.value != '0' && b.value != "write") {
					var email_addr = a.value + '@' + b.value;
				} else if (a.value != '' && b.value == "write" && c.value != '') {
					var email_addr = a.value + '@' + c.value;
				}
				$.ajax({
						url : "/ser_email.php",
						contentType: "application/x-www-form-urlencoded; charset=UTF-8",
						async:false,
						type:'POST',
						data: {'email_addr' : email_addr},
						success : function (response) {
									 var json = JSON.parse(response);
									if(json == "OK") {
											//console.log("OK");
											$("#AR_DIS,  .ar_dis_box, #OK").css("display", "block");
											$("#AR").css("display", "none");
									} else if(json == "AR") {
											$("#AR_DIS,  .ar_dis_box, #AR").css("display", "block");
											$("#OK").css("display", "none");
									}
								}
						});

			} else {
				/*console.log('없음');*/
			}

		}
			addEvent(a,'focusout', btn_listener);
			addEvent(b,'focusout', btn_listener);
			addEvent(c,'focusout', btn_listener);
			addEvent(d,'click', btn_listener);
	}
	var AR_CLOSE = document.getElementById('AR_CLOSE');
	if(AR_CLOSE != null){
		addEvent(AR_CLOSE,'click', function(){
			$("#AR_DIS,  .ar_dis_box, #AR, #OK").css("display", "none");
		});
	}


		
	var acc = document.getElementById('accordion');
	if(acc != null){
		$(function() {
			$( "#accordion" ).accordion();
		  });
	}

	var chn_info = document.getElementById('chn_info');
	if(chn_info != null) {
		
		for(var i=1; i<=4; i++) {
			$("#type_"+i).click(function(){
				$(".cont").css("display", "block");

					if($(this).val() == "메일") {
						document.getElementById('con_type').innerHTML = $(this).val() + " 주소";
					} else if($(this).val() == "카카오톡" || $(this).val() == "WeChat")  { 
						document.getElementById('con_type').innerHTML = $(this).val() + " ID";
					} else if ($(this).val() == "전화")  { 
						document.getElementById('con_type').innerHTML = $(this).val() + " 번호";
					}
			});
		}
		$(':radio[name="con_root"]').click(function(){

			 if($(':radio[name="con_root"]:checked').val() == "기타"){
				 $(':input[name="etc_root"]').attr("disabled", false);
			 } else {
				 $(':input[name="etc_root"]').attr("disabled", true);
			 }
		});
	}
}




function next() {
	var frm = document.application_2;
	if (frm.jumin_1.value.length >= 6)
	{
		frm.jumin_2.focus();
	}
}







function chk_4_1 (idx) { 
	var a = $("#jumin_1_"+idx); 
	var b = $("#jumin_2_"+idx); 
	var c = $("#jumin_num_"+idx); 
	var pyear = $(a).val().substr(0, 2); 
	var pmonth = $(a).val().substr(2, 2); 
	var pday = $(a).val().substr(4, 2); 
	var pj = $(b).val().substr(0, 1); 
	var jumin1 = $(a).val().substr(0,6); 
	var jumin2 = $(b).val().substr(0,7); 
	var frm = document.application_4;


   if (a.val().length > 6) { 
	$(a).val($(a).val().substr(0, 6));
      b.focus(); 
   } 
if (pmonth > 12){ 
alert ("주민번호를 정확히 입력해주세요."); 
a.val("");
c.val("");
a.focus();
return false; 
} 
if (pday > 31){ 
alert ("주민번호를 정확히 입력해주세요."); 
a.val("");
c.val("");
a.focus();
return false; 
} 

if ($(b).val().length == "7") { 

sum = 0;
    sum += $(a).val().charAt(0)*2; 
    sum += $(a).val().charAt(1)*3; 
    sum += $(a).val().charAt(2)*4; 
    sum += $(a).val().charAt(3)*5; 
    sum += $(a).val().charAt(4)*6; 
    sum += $(a).val().charAt(5)*7; 
    sum += $(b).val().charAt(0)*8; 
    sum += $(b).val().charAt(1)*9; 
    sum += $(b).val().charAt(2)*2; 
    sum += $(b).val().charAt(3)*3; 
    sum += $(b).val().charAt(4)*4; 
    sum += $(b).val().charAt(5)*5; 

    check = (11 - sum % 11) % 10; 

    if ($(b).val().charAt(6) != check || ($(a).val().length != 6 && $(b).length != 7)) 
    { 
alert ("잘못된 주민번호 입니다."); 
a.val("");
b.val("");
c.val("");
a.focus();
return false; 
    } 

    if(!($(b).val().charAt(0) == '1' || $(b).val().charAt(0)  == '2' || $(b).val().charAt(0) == '3' || $(b).val().charAt(0) == '4')) 
    { 
alert ("잘못된 주민번호 입니다."); 
a.val("");
b.val("");
c.val("");
a.focus();
return false; 
    } 

if (pj == "1" || pj == "2") 
pyear = "19" + pyear; 
else 
pyear = "20" + pyear; 

var start_dttm = document.application_4.start_date.value;
var s_dttm = start_dttm.split("-");
var end_dttm = document.application_4.end_date.value;
var e_dttm = end_dttm.split("-");
var end_date1 = e_dttm[0];
var end_date2 = e_dttm[1];
var end_date3 = e_dttm[2];
var year = s_dttm[0]; 
var month = s_dttm[1];
var day = s_dttm[2];
var getAge = 0; 
var month2 = month; 
var year2 = year; 
var startDay = frm.start_date.value;
var endDay  = frm.end_date.value;
if (startDay > endDay) {
	alert("출발일자가 도착일자 보다 이후 입니다. ");
	document.getElementById('jumin_2_'+idx).value= ''; 
	frm.end_date.focus();
	return false;	 	  	
}

if ( (  startDay == endDay)  && (parseInt(frm.end_date4.value) - parseInt(frm.start_date4.value) < 2) ) 
{
	alert("출발 도착 시간을 정확히 선택해주세요.");
	document.getElementById('jumin_2_'+idx).value= ''; 
	frm.start_date.focus();
	return false;   	}

var nowTimeStamp = new Date().getTime();
var inTimeStamp = new Date(s_dttm[0], s_dttm[1] - 1, s_dttm[2], frm.start_date4.value - 1).getTime();

if (nowTimeStamp > inTimeStamp)
{
	alert("출발 시각은 현재시각 이후로 입력하세요.");
	document.getElementById('jumin_2_'+idx).value= ''; 
	frm.start_date4.focus();
	return false;
}

	if(day < pday) {
		month2 = month2 -1;
	}
	if(month2 < pmonth) {
		year2 = year2-1;
		month2 = month2 + 12 - year;
	} else {
		month2 = month2 - year;
	}
	
	year2 = year2 - pyear;
	getAge = year2;
	
	if(getAge > 14 && month2 >= 6 && getAge < 69) {
		getAge = getAge + 1;
	} else if(getAge <= 14) {
		getAge;
	} else {
		getAge;
	}

	var fy = s_dttm[0];
	var fm = s_dttm[1];
	var fd = s_dttm[2];
	var fh = frm.start_date4.value;
	var ty = e_dttm[0];
	var tm = e_dttm[1];
	var td = e_dttm[2];
	var th = frm.end_date4.value;	
	var fromDate = new Date(fy, fm - 1, fd, fh);
	var toDate = new Date(ty, tm - 1, td, th);	
	var gapTimeStamp = toDate - fromDate;
	var gapHour = Math.ceil(gapTimeStamp / 1000 / 60 / 60 / 24);
	if (gapHour < 0)
	{
		gapHour = "";
	}
	else if (gapHour < 2)
	{
		gapHour = 2;
	}

	frm.insu_days.value = gapHour;


document.getElementById('jumin_num_'+idx).value= "보험나이"+getAge+"세"; 
	} 
} 


$(document).ready(function(){ 
	var idx =+ 1;
   $("#add_p, #add_p_1, #add_p_2").click(function() { 
	   if(idx >= 20) {
			alert("가입인원이 20명 이상인 경우, 상단 '이메일 보험가입 신청'을 이용바랍니다. 자세한 설명은 당사로 연락주시면 안내드리겠습니다");

	   } else {
				  $("#contractor").append( 
					  '<div class="clear"></div>'
					+'<div class="peo_added_'+idx+'" id="peo_added"> <p class="n_ppl">　▶ 추가 인원 '+ idx +'명째</p>'
				  +'<div class="contractor">'
				+'<div class="contractor_group">'
						+'<div class="contractor_left">'
							+'<span>이름</span>'
						+'</div>'
						+'<div class="contractor_right">'
							+'<span>'
								+'한글 <input type="text" name="nm_'+idx+'"/> 영문 <input type="text" name="engnm_'+idx+'"/>' /*현재인원 삭제<img src="/main/images/del_btn.png" onclick="now_del('+idx+');">'*/
							+'</span>'
						+'</div>'
					+'</div>'
					+'<div class="contractor_group">'
						+'<div class="contractor_left">'
							+'<span>주민등록번호</span>'
						+'</div>'
						+'<div class="contractor_right">'
							+'<span>'
								+'<input type="text" id="jumin_1_'+idx+'" name="jumin_1_'+idx+'" onkeyup="chk_4_1('+idx+');" onkeydown="chk_4_1('+idx+');"/>'
								+' - <input type="text"  id="jumin_2_'+idx+'" name="jumin_2_'+idx+'" maxlength="7" onkeyup="chk_4_1('+idx+');" onkeydown="chk_4_1('+idx+');"/>'
							+'</span>'
							+'<span class="red">'
								+'<input type="text" name="jumin_num_'+idx+'" id="jumin_num_'+idx+'" class="jumin"  readonly="readonly">'
							+'</span>'
						+'</div>'
					+'</div>'
					+'<div class="clear"></div>'
						+'<div class="ppl_ids"><img src="/main/images/all_same.png" onclick="all_same('+idx+')" alt="일괄적용" style="cursor: pointer;">클릭 시, 이름과 주민번호를 제외한 나머지 정보(고지사항 및 인적사항)가 동일하게 입력됩니다.</div>'
					+'<div class="contractor_group_02">'
						+'<div class="contractor_left">'
							+'<span>집전화</span>'
						+'</div>'
						+'<div class="contractor_right_02">'
							+'<span>'
								+'<select name="tel_0_'+idx+'">'
									+'<option value="02" selected > 02  </option>'
									+'<option value="031" > 031  </option>'
									+'<option value="032" > 032  </option>'
									+'<option value="033" > 033  </option>'
									+'<option value="041" > 041  </option>'
									+'<option value="042" > 042  </option>'
									+'<option value="043" > 043  </option>'
									+'<option value="044" > 044  </option>'
									+'<option value="050" > 050  </option>'
									+'<option value="051" > 051  </option>'
									+'<option value="052" > 052  </option>'
									+'<option value="053" > 053  </option>'
									+'<option value="054" > 054  </option>'
									+'<option value="055" > 055  </option>'
									+'<option value="061" > 061  </option>'
									+'<option value="062" > 062  </option>'
									+'<option value="063" > 063  </option>'
									+'<option value="064" > 064  </option>'
									+'<option value="070" > 070  </option>'
									+'<option value="010">  010  </option>'
									+'<option value="011"> 011   </option>'
									+'<option value="016"> 016   </option>'
									+'<option value="017"> 017   </option>'
									+'<option value="018"> 018   </option>'
									+'<option value="019"> 019   </option>'
								+'</select>'
								+'- <input size="7" type="/text"/ name="tel_1_'+idx+'" maxlength="4">'
								+'- <input size="7" type="/text"/ name="tel_2_'+idx+'" maxlength="4">'
							+'</span>'
						+'</div>'
					+'</div>'
					+'<div class="contractor_group_02">'
						+'<div class="contractor_left">'
							+'<span>핸드폰번호</span>'
						+'</div>'
						+'<div class="contractor_right_02">'
							+'<span>'
								+'<select name="cel_0_'+idx+'">'
									+'<option value="010" selected>  010  </option>'
									+'<option value="011"> 011   </option>'
									+'<option value="016"> 016   </option>'
									+'<option value="017"> 017   </option>'
									+'<option value="018"> 018   </option>'
									+'<option value="019"> 019   </option>'
									+'<option value="02" > 02  </option>'
									+'<option value="031" > 031  </option>'
									+'<option value="032" > 032  </option>'
									+'<option value="033" > 033  </option>'
									+'<option value="041" > 041  </option>'
									+'<option value="042" > 042  </option>'
									+'<option value="043" > 043  </option>'
									+'<option value="044" > 044  </option>'
									+'<option value="050" > 050  </option>'
									+'<option value="051" > 051  </option>'
									+'<option value="052" > 052  </option>'
									+'<option value="053" > 053  </option>'
									+'<option value="054" > 054  </option>'
									+'<option value="055" > 055  </option>'
									+'<option value="061" > 061  </option>'
									+'<option value="062" > 062  </option>'
									+'<option value="063" > 063  </option>'
									+'<option value="064" > 064  </option>'
									+'<option value="070" > 070  </option>'
								+'</select> '
								+'- <input size="7" type="/text"/ name="cel_1_'+idx+'" maxlength="4">'
								+'- <input size="7" type="/text"/ name="cel_2_'+idx+'" maxlength="4">'
							+'</span>'
						+'</div>'
					+'</div>'
					+'<div class="contractor_group">'
						+'<div class="contractor_left test_555">'
							+'<span>주소</span>'
						+'</div>'
						+'<div class="contractor_right">'
							+'<span>'
								+'<a href="javascript:execDaumPostcode('+idx+');"><img src="/main/images/post_search.png" alt="우편번호 찾기"/></a>'
							+'</span>'
							+'<span>'
								+'기본주소 <input size="10" type="/text"/ name="add_0_'+idx+'" id="add_0_'+idx+'" readonly="readonly" onclick="javascript:execDaumPostcode('+idx+');"><input size="48" type="/text"/ name="add_1_'+idx+'" id="add_1_'+idx+'" readonly="readonly" onclick="javascript:execDaumPostcode('+idx+');">'
							+'</span>'
							+'<span>'
								+'상세주소 <input size="60" type="/text"/ name="add_2_'+idx+'" >'
							+'</span>'
						+'</div>'
					+'</div>'
					+'<div class="contractor_group">'
						+'<div class="contractor_left">'
							+'<span>이메일 주소</span>'
						+'</div>'
						+'<div class="contractor_right">'
							+'<span>'
								+'<input type=text name="email_1_'+idx+'" style="ime-mode:disabled"   size="30" maxlength=30 > &#64; '
								+'<select name="email_2_'+idx+'" onchange="javascript:focus_mailtext('+idx+');"   style="width:150px; margin-right: 10px;">'
									+'<option value="0">선택하세요</option>'
									+'<optION value="daum.net" > daum.net  </option>'
									+'<optION value="naver.com" > naver.com  </option>'
									+'<optION value="gmail.com" > gmail.com  </option>'
									+'<optION value="hanmail.net" > hanmail.net  </option>'
									+'<optION value="msn.com" > msn.com  </option>'
									+'<optION value="nate.com" > nate.com  </option>'
									+'<optION value="yahoo.com" > yahoo.com  </option>'
									+'<optION value="yahoo.co.kr" > yahoo.co.kr  </option>'
									+'<option value="write">직접입력</option>'
								+'</select>'
								+'<input type="text" name="email_3_'+idx+'"  style="display: none;"   size="20" maxlength="50" class="css_input_textbox">'
								+'<button type="button" style="width: 100px; height: 20px; border:1px solid black; border-radius: 3px;"  name="email_4_'+idx+'"  onclick="javascript:nonfocus_mailtext('+idx+');"  >메일선택</button>'
							+'</span>'
						+'</div>'
					+'</div>'
					+'<div class="contractor_group">'
						+'<div class="contractor_left test_666">'
							+'<span>고지사항</span>'
						+'</div>'
						+'<div class="contractor_right">'
							+'<span>'
							+'여행지  '
							+'<select name="goji_9_'+idx+'" style="width:120px" onchange="javascript:Desti('+idx+');" >'
								+'<option value="0">선택해주세요</option>'
								+'<option value="해외">해외</option>'
								+'<option value="서울특별시">서울특별시</option>'
								+'<option value="부산광역시">부산광역시</option>'
								+'<option value="대구광역시">대구광역시</option>'
								+'<option value="인천광역시">인천광역시</option>'
								+'<option value="광주광역시">광주광역시</option>'
								+'<option value="대전광역시">대전광역시</option>'
								+'<option value="울산광역시">울산광역시</option>'
								+'<option value="세종특별자치시">세종특별자치시</option>'
								+'<option value="경기도">경기도</option>'
								+'<option value="강원도">강원도</option>'
								+'<option value="충청북도">충청북도</option>'
								+'<option value="충청남도">충청남도</option>'
								+'<option value="전라북도">전라북도</option>'
								+'<option value="전라남도">전라남도</option>'
								+'<option value="경상북도">경상북도</option>'
								+'<option value="경상남도">경상남도</option>'
								+'<option value="제주특별자치도">제주특별자치도</option>'
							+'</select>'
							+'  <select name="goji_10_'+idx+'" style="width:120px">'
								+'<option value="0">'
									+'선택해주세요'
								+'</option>'
							+'</select>'
							+'</span>'
							+'<span>'
								+'여행목적  '
								+'<select name="tour_reason_'+idx+'" style="width: 80px;">'
									+'<option value="0">선택</option>'
									+'<option value="여행">여행</option>'
									+'<option value="어학연수">어학연수</option>'
									+'<option value="유학">유학</option>'
									+'<option value="출장">출장</option>'
									+'<option value="주재원">주재원</option>'
									+'<option value="워킹홀리데이">워킹홀리데이</option>'
									+'<option value="기타" >기타</option>'
								+'</select>'
							+'</span>'
							+'<span>'
								+'출국여부  '
								+'<select style="width:80px" name="goji_7_'+idx+'" onChange="javascript:moveChoice(this);">'
									+'<option value="0">선택</option>'
									+'<option value="출국전">출국전</option>'
									+'<option value="출국후">출국후</option>'
								+'</select>'
							+'</span>'
							+'<span>'
								+'직업  '
								+'<select name="goji_8_'+idx+'" style="width: 80px;">'
									+'<option value="0">선택</option>'
									+'<option value="회사원">회사원</option>'
									+'<option value="학생">학생</option>'
									+'<option value="주부">주부</option>'
									+'<option value="자영업">자영업</option>'
									+'<option value="공무원">공무원</option>'
									+'<option value="교직자">교직자</option>'
									+'<option value="의료인">의료인</option>'
									+'<option value="법조인">법조인</option>'
									+'<option value="종교인">종교인</option>'
									+'<option value="예술인">예술인</option>'
									+'<option value="언론인">언론인</option>'
									+'<option value="방송인">방송인</option>'
									+'<option value="연예인">연예인</option>'
									+'<option value="금융/보험">금융/보험</option>'
									+'<option value="농업">농업</option>'
									+'<option value="수산업">수산업</option>'
									+'<option value="축산업">축산업</option>'
									+'<option value="광업">광업</option>'
									+'<option value="서비스업">서비스업</option>'
									+'<option value="군인">군인</option>'
									+'<option value="무직">무직</option>'
									+'<option value="기타">기타</option>'
								+'</select>'
							+'</span>'
							+'<span class="line">'
							+'</span>'
							+'<span>'
								+'현재건강상태  '
								+'<select style="width:80px" name="goji_3_'+idx+'">'
									+'<option value="0">선택</option>'
									+'<option value="양호">양호</option>'
									+'<option value="불량">불량</option>'
								+'</select>'
							+'</span>'
							+'<span>'
								+'유전성질환  '
								+'<select style="width:80px" name="goji_4_'+idx+'">'
									+'<option value="0">선택</option>'
									+'<option value="없음">없음</option>'
									+'<option value="있음">있음</option>'
								+'</select>'
							+'</span>'
							+'<span>'
								+'과거상병유무  '
								+'<select style="width:80px" name="goji_5_'+idx+'">'
									+'<option value="0">선택</option>'
									+'<option value="없음">없음</option>'
									+'<option value="있음">있음</option>'
								+'</select>'
							+'</span>'
							+'<span>'
								+'기능성장애  '
								+'<select style="width:80px" name="goji_6_'+idx+'">'
									+'<option value="0">선택</option>'
									+'<option value="없음">없음</option>'
									+'<option value="있음">있음</option>'
								+'</select>'
							+'</span>'
							+'<span>'
						+'</div>'
					+'</div>'
					+'</div>'
				  ); 
	      idx++; 
	   }
	$( "input[name='nums']" ).val(idx);
	
   }); 

	
	$("#del_p, #del_p_1, #del_p_2").click(function() {
		if (idx <= 1 )	{
			alert('1인 이하로 삭제 할 수 없습니다.');
			}
		else {
					idx--;
		$(".peo_added_"+idx).remove();
		$( "input[name='nums']" ).val(idx);
		}
	});




/* 동일 값 입력할 수 있게하는 이벤트 ㅇㅇ 굿잡 jay*/
$("#one_shot, #one_shot_1").click(function(){
	var tel_0 = $( "select[name='tel_0_0']" ).val();
	var tel_1 = $( "input[name='tel_1_0']" ).val();
	var tel_2 = $( "input[name='tel_2_0']" ).val();
	var cel_0 = $( "select[name='cel_0_0']" ).val();
	var cel_1 = $( "input[name='cel_1_0']" ).val();
	var cel_2 = $( "input[name='cel_2_0']" ).val();
	var add_0 = $( "input[name='add_0_0']" ).val();
	var add_1 = $( "input[name='add_1_0']" ).val();
	var add_2 = $( "input[name='add_2_0']" ).val();
	var email_1 = $( "input[name='email_1_0']" ).val();
	var email_2 = $( "select[name='email_2_0']" ).val();
	var email_3 = $( "input[name='email_3_0']" ).val();
	var goji_3 = $( "select[name='goji_3_0']" ).val();
	var goji_4 = $( "select[name='goji_4_0']" ).val();
	var goji_5 = $( "select[name='goji_5_0']" ).val();
	var goji_6 = $( "select[name='goji_6_0']" ).val();
	var goji_7 = $( "select[name='goji_7_0']" ).val();
	var goji_8 = $( "select[name='goji_8_0']" ).val();
	var goji_9 = $( "select[name='goji_9_0']" ).val();
	var goji_10 = $( "select[name='goji_10_0']" ).val();
	var tour_reason = $( "select[name='tour_reason_0']" ).val();

	for ($i=0; $i<idx; $i++){
		$( "select[name='tel_0_"+($i)+"']" ).val(tel_0);
		$( "input[name='tel_1_"+($i)+"']" ).val(tel_1);
		$( "input[name='tel_2_"+($i)+"']" ).val(tel_2);
		$( "select[name='cel_0_"+($i)+"']" ).val(cel_0);
		$( "input[name='cel_1_"+($i)+"']" ).val(cel_1);
		$( "input[name='cel_2_"+($i)+"']" ).val(cel_2);
		$( "input[name='add_0_"+($i)+"']" ).val(add_0);
		$( "input[name='add_1_"+($i)+"']" ).val(add_1);
		$( "input[name='add_2_"+($i)+"']" ).val(add_2);
		$( "input[name='email_1_"+($i)+"']" ).val(email_1);
		$( "select[name='email_2_"+($i)+"']" ).val(email_2);
		$( "input[name='email_3_"+($i)+"']" ).val(email_3);
		$( "select[name='goji_3_"+($i)+"']" ).val(goji_3);
		$( "select[name='goji_4_"+($i)+"']" ).val(goji_4);
		$( "select[name='goji_5_"+($i)+"']" ).val(goji_5);
		$( "select[name='goji_6_"+($i)+"']" ).val(goji_6);
		$( "select[name='goji_7_"+($i)+"']" ).val(goji_7);
		$( "select[name='goji_8_"+($i)+"']" ).val(goji_8);
		$( "select[name='goji_9_"+($i)+"']" ).val(goji_9);
		$( "select[name='goji_10_"+($i)+"']" ).append($("<option></option>").val(goji_10).attr("selected", "selected").text(goji_10));
		$( "select[name='tour_reason_"+($i)+"']" ).val(tour_reason);
		}
	});

}); 

	function all_same(idx) {
	var tel_0 = $( "select[name='tel_0_0']" ).val();
	var tel_1 = $( "input[name='tel_1_0']" ).val();
	var tel_2 = $( "input[name='tel_2_0']" ).val();
	var cel_0 = $( "select[name='cel_0_0']" ).val();
	var cel_1 = $( "input[name='cel_1_0']" ).val();
	var cel_2 = $( "input[name='cel_2_0']" ).val();
	var add_0 = $( "input[name='add_0_0']" ).val();
	var add_1 = $( "input[name='add_1_0']" ).val();
	var add_2 = $( "input[name='add_2_0']" ).val();
	var email_1 = $( "input[name='email_1_0']" ).val();
	var email_2 = $( "select[name='email_2_0']" ).val();
	var email_3 = $( "input[name='email_3_0']" ).val();
	var goji_3 = $( "select[name='goji_3_0']" ).val();
	var goji_4 = $( "select[name='goji_4_0']" ).val();
	var goji_5 = $( "select[name='goji_5_0']" ).val();
	var goji_6 = $( "select[name='goji_6_0']" ).val();
	var goji_7 = $( "select[name='goji_7_0']" ).val();
	var goji_8 = $( "select[name='goji_8_0']" ).val();
	var goji_9 = $( "select[name='goji_9_0']" ).val();
	var goji_10 = $( "select[name='goji_10_0']" ).val();
	var tour_reason = $( "select[name='tour_reason_0']" ).val();

	for ($i=0; $i<=idx; $i++){
		$( "select[name='tel_0_"+($i)+"']" ).val(tel_0);
		$( "input[name='tel_1_"+($i)+"']" ).val(tel_1);
		$( "input[name='tel_2_"+($i)+"']" ).val(tel_2);
		$( "select[name='cel_0_"+($i)+"']" ).val(cel_0);
		$( "input[name='cel_1_"+($i)+"']" ).val(cel_1);
		$( "input[name='cel_2_"+($i)+"']" ).val(cel_2);
		$( "input[name='add_0_"+($i)+"']" ).val(add_0);
		$( "input[name='add_1_"+($i)+"']" ).val(add_1);
		$( "input[name='add_2_"+($i)+"']" ).val(add_2);
		$( "input[name='email_1_"+($i)+"']" ).val(email_1);
		$( "select[name='email_2_"+($i)+"']" ).val(email_2);
		$( "input[name='email_3_"+($i)+"']" ).val(email_3);
		$( "select[name='goji_3_"+($i)+"']" ).val(goji_3);
		$( "select[name='goji_4_"+($i)+"']" ).val(goji_4);
		$( "select[name='goji_5_"+($i)+"']" ).val(goji_5);
		$( "select[name='goji_6_"+($i)+"']" ).val(goji_6);
		$( "select[name='goji_7_"+($i)+"']" ).val(goji_7);
		$( "select[name='goji_8_"+($i)+"']" ).val(goji_8);
		$( "select[name='goji_9_"+($i)+"']" ).val(goji_9);
		$( "select[name='goji_10_"+($i)+"']" ).append($("<option></option>").val(goji_10).attr("selected", "selected").text(goji_10));
		$( "select[name='tour_reason_"+($i)+"']" ).val(tour_reason);
		}
	}

	/*
function now_del(idx) {
	var total = document.application_4.nums.value;
	var a_total = total-1;
	alert(idx);
		if (total <= 1 )	{
			alert('1인 이하로 삭제 할 수 없습니다.');
			}
		else {
		$(".peo_added_"+idx).remove();
	
		$( "input[name='nums']" ).val(a_total);
		alert (a_total);
		}
		for(i=1; i<= total-1; i++) {
		alert(i);
		}
}
*/

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function focus_mailtext(idx)
{

var a = document.application_4.elements['email_2_'+idx];
var b = document.application_4.elements['email_3_'+idx];
var c = document.application_4.elements['email_4_'+idx];

	if (a.value == "write")
	{	b.style.display="";
		a.style.display="none";
		c.style.display ="";
	}
	else
	{
		b.value="";
		a.style.display="";
		b.style.display="none";
		c.style.display ="none";
	}
}
function nonfocus_mailtext(idx) 
{

var a = document.application_4.elements['email_2_'+idx];
var b = document.application_4.elements['email_3_'+idx];
var c = document.application_4.elements['email_4_'+idx];

		b.value="";
		a.style.display="";
		b.style.display="none";
		c.style.display ="none";
		a.value = "none";
}

function moveChoice(form) { 
 var Choice=form.options[form.selectedIndex].value; 
 if (Choice=="출국후") { 
  alert("해외 현지 가입시 무사고확인서 작성 후 가입이 가능합니다. \n당사로 전화 또는 email 문의 바랍니다. \n\n 국외 +82 2-334-0040 / 국내 1644-5544　　Email: travelover@travelover.co.kr \n\n 무사고확인서 작성 페이지로 이동합니다." ); 
  location.href = "/accident_free.html";
    return false; 
 } 
} 

function CheckType(s,spc) {
	var i;
	for(i=0; i<s.length; i++) {
		if (spc.indexOf( s.substring(i, i+1)) < 0) {
			return false;
		}
	}

	return true;
}



function chkFrm() {
	var j = $( "input[name='nums']" ).val();
	var frm=document.application_4;



	if($(':radio[name="a_route"]:checked').val() == undefined){
		alert("신규가입/재가입 선택");
		return false;
	}
	 if($(':radio[name="a_route"]:checked').val() == "1"){
		if($(':radio[name="new_select"]:checked').val() == undefined ){
			alert("가입경로 선택바랍니다.");
			return false;
		}
		if($(':radio[name="new_select"]:checked').val() == "1") {
			if($(':radio[name="search_select"]:checked').val() == undefined){
				alert("검색경로 선택바랍니다..");
				return false;
			}		
		}
	}

	for($i=0; $i < j; $i++){
		k= $i+1;
		for (; k<j; k++)
			{
			if (frm.elements['jumin_1_'+[$i]].value+frm.elements['jumin_2_'+[$i]].value == frm.elements['jumin_1_'+[k]].value+frm.elements['jumin_2_'+[k]].value) {
				alert('주민번호가 중복됩니다.');
				frm.elements['jumin_1_'+[k]].value = "";
				frm.elements['jumin_2_'+[k]].value = "";
				frm.elements['jumin_1_'+[k]].focus();
			return false;
			}
	}
	for($i=0; $i < j; $i++){
		var peo_nums = $i+1;
		if(frm.elements['nm_'+$i].value == ""){
			alert(peo_nums+"번째 이름을 입력해주세요");
			frm.elements['nm_'+$i].focus();
			return false;
		}
		if(frm.elements['engnm_'+$i].value == ""){
			alert(peo_nums+"번째 영문 이름을 입력해주세요");
			frm.elements['engnm_'+$i].focus();
			return false;
		}
		if(frm.elements['jumin_1_'+$i].value == ""){
			alert(peo_nums+"번째 주민번호를 입력해주세요");
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(frm.elements['jumin_1_'+$i].value.length !=  "6"){		
			alert(peo_nums+"번째 주민번호를 정확히 입력해주세요");
			frm.elements['jumin_1_'+$i].value = "";
			frm.elements['jumin_2_'+$i].value = "";
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['jumin_1_'+$i].value)){
			alert(peo_nums+"번째 주민번호를 정확히 입력해주세요");
			frm.elements['jumin_1_'+$i].value = "";
			frm.elements['jumin_2_'+$i].value = "";
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(frm.elements['jumin_2_'+$i].value == ""){
			alert(peo_nums+"번째 주민번호를 입력해주세요");
			frm.elements['jumin_1_'+$i].value = "";
			frm.elements['jumin_2_'+$i].value = "";
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(frm.elements['jumin_2_'+$i].value.length != "7"){
			alert(peo_nums+"번째 주민번호를 정확히 입력해주세요");
			frm.elements['jumin_1_'+$i].value = "";
			frm.elements['jumin_2_'+$i].value = "";
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['jumin_2_'+$i].value)){
			alert(peo_nums+"번째 주민번호를 정확히 입력해주세요");
			frm.elements['jumin_1_'+$i].value = "";
			frm.elements['jumin_2_'+$i].value = "";
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(frm.elements['jumin_num_'+$i].value == ""){
			alert("주민번호를 입력해주세요");
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(frm.elements['tel_1_'+$i].value == ""){
			alert("전화번호를 입력해주세요");
			frm.elements['tel_1_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['tel_1_'+$i].value)){
			alert("전화번호를 정확히 입력해주세요");
			frm.elements['tel_1_'+$i].focus();
			return false;
		}
		if(frm.elements['tel_2_'+$i].value == ""){
			alert("전화번호를 입력해주세요");
			frm.elements['tel_2_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['tel_2_'+$i].value)){
			alert("전화번호를 정확히 입력해주세요");
			frm.elements['tel_2_'+$i].focus();
			return false;
		}
		if(frm.elements['cel_1_'+$i].value == ""){
			alert("핸드폰번호를 입력해주세요");
			frm.elements['cel_1_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['cel_1_'+$i].value)){
			alert("핸드폰번호를 정확히 입력해주세요");
			frm.elements['cel_1_'+$i].focus();
			return false;
		}
		if(frm.elements['cel_2_'+$i].value == ""){
			alert("핸드폰번호를 입력해주세요");
			frm.elements['cel_2_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['cel_2_'+$i].value)){
			alert("핸드폰번호를 정확히 입력해주세요");
			frm.elements['cel_2_'+$i].focus();
			return false;
		}
		if(frm.elements['add_0_'+$i].value == ""){
			alert("주소를 선택해주세요");
			frm.elements['add_0_'+$i].focus();
			return false;
		}
		if(frm.elements['add_1_'+$i].value == ""){
			alert("주소를 선택해주세요");
			frm.elements['add_1_'+$i].focus();
			return false;
		}
		if(frm.elements['add_2_'+$i].value == ""){
			alert("상세주소를 입력해주세요");
			frm.elements['add_2_'+$i].focus();
			return false;
		}
		
		var email1 = frm.elements['email_1_'+$i].value;

		// var email2=frm.email_2.[frm.email_2.selectedIndex].value;
		var email2 = frm.elements['email_2_'+$i].value;
		var email3 = frm.elements['email_3_'+$i].value;

		email1 = email1.replace(/^\s*(\b.*\b|)\s*$/, "$1"); // 문장의 앞과 뒤의 공백 제거

		if (email1 == "") {
			alert("Email ID를 입력하셔야 합니다.");
			frm.elements['email_1_'+$i].focus();
			return false;
		}

		if (email2 == "none" || email2 == "0") {
			alert("Email 제공업체를 선택하셔야 합니다.");
			frm.elements['email_2_'+$i].focus();
			return false;
		}

		if (email2 == "write") {
			if (email3 == "") {
				alert("Email 제공업체를 입력하셔야 합니다.");
				frm.elements['email_3_'+$i].focus();
				return false;
			}
			var b = email3.indexOf('.');
			if (b <= 0 || b == email3.length - 1) {
				alert("daum.net 등의 형태로 입력하셔야 합니다.");
				frm.elements['email_3_'+$i].focus();
				return false;
			}
			var email = email1 + "@" + email3;
			var EMAIL = /^([\w-]+(?:\.[\w-]+)*)/;

			if (!CheckType(EMAIL, email)) {
				alert("Email에 잘못된 문자가 있습니다.");
				frm.elements['email_3_'+$i].focus();
				return false;
			}
			var a = email.indexOf('@');
			if (a <= 0 || a == email.length - 1) {
				alert("Email 형식이 잘못되었습니다.");
				frm.elements['email_3_'+$i].focus();
				return false;
			}
		}

		if(frm.elements['goji_9_'+$i].value == "0"){
			alert("여행지를 선택해주세요");
			frm.elements['goji_9_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_10_'+$i].value == "0" || frm.elements['goji_10_'+$i].value == "" ){
			alert("여행지를 선택해주세요");
			frm.elements['goji_10_'+$i].focus();
			return false;
		}
		if(frm.elements['tour_reason_'+$i].value == "0"){
			alert("여행목적을 선택해주세요");
			frm.elements['tour_reason_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_7_'+$i].value == "0"){
			alert("출국여부 선택해주세요");
			frm.elements['goji_7_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_7_'+$i].value == "출국후"){
			alert("해외 현지 가입시 무사고확인서 작성 후 가입이 가능합니다. \n당사로 전화 또는 email : travelover@travelover.co.kr 문의 바랍니다."); 
			frm.elements['goji_7_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_8_'+$i].value == "0"){
			alert("직업을 선택해주세요");
			frm.elements['goji_8_'+$i].focus();
			return false;
		}

		if(frm.elements['goji_3_'+$i].value == "0"){
			alert("현재 건강상태를 선택해주세요");
			frm.elements['goji_3_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_4_'+$i].value == "0"){
			alert("유전성질환 유무를 선택해주세요");
			frm.elements['goji_4_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_5_'+$i].value == "0"){
			alert("과거상병 유무를 선택해주세요");
			frm.elements['goji_5_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_6_'+$i].value == "0"){
			alert("기능성장애 여부를 선택해주세요");
			frm.elements['goji_6_'+$i].focus();
			return false;
		}
	}
	}//end for Sentence
		return true;
}

function nonDis() {
$("input:radio[name=a_route]:input[value=1]").attr("disabled","true");
$("input:radio[name=a_route]:input[value=2]").attr("disabled","");
$("input:radio[name=new_select]").attr("disabled","true");
$("input:radio[name=search_select]").attr("disabled","true");

}
function yesDis() {
//초기화
$("input:radio[name=a_route]").attr("value","");
$("input:radio[name=new_select]").attr("value","");
$("input:radio[name=search_select]").attr("value","");

$("input:radio[name=a_route]").attr("disabled","");
$("input:radio[name=new_select]").attr("disabled","");
$("input:radio[name=search_select]").attr("disabled","");

}

$(document).ready(function() { // 해당 페이지 Loading 후, 
	$("input[name=a_route]").click(function(){ // 라디오버튼 클릭 이벤트 
		if($("input[name=a_route]:checked").val() == "1"){ 
			$("input:radio[name=new_select]").attr("checked",false);
			$("input:radio[name=search_select]").attr("checked",false);
			$("input:radio[name=a_route]").attr("disabled",false);
			$("input:radio[name=new_select]").attr("disabled",false);
			$("input:radio[name=search_select]").attr("disabled",false);
			} else { 
			$("input:radio[name=new_select]").attr("checked",false);
			$("input:radio[name=search_select]").attr("checked",false);
			$("input:radio[name=a_route]").attr("disabled",false);
			$("input:radio[name=new_select]").attr("disabled",false);
			$("input:radio[name=search_select]").attr("disabled",false);
			// 만약에 기존 textbox에 데이터가 입력된 상태에서 테스트1에 갔다가 다시 돌아왔을때를 위해 초기화 
			$("input:radio[name=new_select]").attr("disabled",true);
			$("input:radio[name=search_select]").attr("disabled",true);
			// 테스트1 라디오를 클릭하면 비활성화 
		} 
	}); 
	$("input[name=new_select]").click(function(){ // 라디오버튼 클릭 이벤트 
		if($("input[name=new_select]:checked").val() == "1"){ 
			$("input:radio[name=search_select]").attr("disabled",false);
			} else { 
			$("input:radio[name=search_select]").attr("disabled",false);
			$("input:radio[name=search_select]").attr("disabled",true);
			// 테스트1 라디오를 클릭하면 비활성화 
		} 
	}); 
	$("input[name=search_select]").click(function(){ // 라디오버튼 클릭 이벤트 
		$('input:radio[name=new_select]:input[value=1]').attr("checked", true);
		$('input:radio[name=a_route]:input[value=1]').attr("checked", true);
	}); 
	
});

// 2017.2.10 adan 주민번호 추가
function l_select(idx, age, sdate, edate, jumin) {
	var cat1 = document.application_5.elements['tour_t_'+idx].value;
	document.getElementById('table_'+idx).src= "/insu_table.html?no="+idx+"&cat1="+cat1+"&insu_age="+age+"&sdate="+sdate+"&edate="+edate+"&jumin="+jumin;
		$(".sselect_"+idx).slideToggle("slow");
}


function tour_t(idx) {
	$(".sselect_"+idx).slideUp("slow");
}

function email_mailtext()
{
var a = document.email_frm.elements['email_2'];
var b = document.email_frm.elements['email_3'];
var c = document.email_frm.elements['email_4'];

	if (a.value == "write")
	{	b.style.display="";
		a.style.display="none";
		$("a").val("");
		c.style.display ="block";
	}
	else
	{
		b.value="";
		a.style.display="";
		b.style.display="none";
		c.style.display ="none";
		$("c").val("");
	}
}
function nemail_mailtext() 
{
var a = document.email_frm.elements['email_2'];
var b = document.email_frm.elements['email_3'];
var c = document.email_frm.elements['email_4'];

		b.value="";
		a.style.display="";
		a[0].value = "selected";
		b.style.display="none";
		c.style.display ="none";


}




function fn_CardBankSelect() {
	var i,selectedType;
	var len = document.email_frm.money.length;
	
	for(i = 0; i < len; i++)
	{
		if(document.email_frm.money[i].checked == true)
		{
			selectedType = document.email_frm.money[i].value;
		}
	}
  if (selectedType == "2") {
    document.email_frm.card_1.value = "";
    document.email_frm.card_date1.value = "";
    document.email_frm.card_date2.value = "";
    document.email_frm.card_num1.value = "";
    document.email_frm.card_num2.value = "";
    document.email_frm.card_num3.value = "";
    document.email_frm.card_num4.value = "";
    document.email_frm.cvc.value = "";

    document.email_frm.card_1.disabled = true;
    document.email_frm.card_date1.disabled = true;
    document.email_frm.card_date2.disabled = true;
    document.email_frm.card_num1.disabled = true;
    document.email_frm.card_num2.disabled = true;
    document.email_frm.card_num3.disabled = true;
    document.email_frm.card_num4.disabled = true;
    document.email_frm.cvc.disabled = true;
    
    document.getElementById("settle_text").innerHTML = "<img src='/main/images/check_02.png' /> 무통장 입금자명";
	document.email_frm.settle_name.focus();

  } else {
    document.email_frm.card_1.disabled = false;
    document.email_frm.card_1[0].selected =true;
    document.email_frm.card_date1.disabled = false;
    document.email_frm.card_date1[0].selected = true;
    document.email_frm.card_date2.disabled = false;
    document.email_frm.card_date2[0].selected = true;
    document.email_frm.card_num1.disabled = false;
    document.email_frm.card_num2.disabled = false;
    document.email_frm.card_num3.disabled = false;
    document.email_frm.card_num4.disabled = false;
    document.email_frm.cvc.disabled = false;
    
    document.getElementById("settle_text").innerHTML = "<img src='/main/images/check_02.png' /> 카드 소유주";
  
  } 
}

function fn_chkNum() {
  if (event.keyCode < 26 || event.keyCode < 45 || event.keyCode > 57) {
     event.returnValue = false; 
     alert('숫자만 입력하세요'); 
  }
}


function qna_mailtext()
{
var a = document.qna.elements['email_2'];
var b = document.qna.elements['email_3'];
var c = document.qna.elements['email_4'];

	if (a.value == "write")
	{	b.style.display="";
		a.style.display="none";
		c.style.display ="";
	}
	else
	{
		b.value="";
		a.style.display="";
		b.style.display="none";
		c.style.display ="none";
	}
}
function nqna_mailtext() 
{
var a = document.qna.elements['email_2'];
var b = document.qna.elements['email_3'];
var c = document.qna.elements['email_4'];

		b.value="";
		a.style.display="";
		b.style.display="none";
		c.style.display ="none";
		a[0].value = "selected";
}

function ChkQ() {
var f = document.qna;

	if(!f.agr.checked) {
		alert('이용약관에 동의하셔야 신청가능합니다.');
		f.agr.focus();
		return false;
	}
	if(f.title.value == "") {
		alert('제목을 입력해주세요');
		f.title.focus();
		return false;
	}
	if(f.title.value.length > 100) {
		alert('제목은 100자이하로 입력가능합니다.');
		f.title.focus();
		return false;
	}
	if(f.name.value == "") {
		alert('이름을 입력해주세요');
		f.name.focus();
		return false;
	}
	if(f.name.value.length > 10) {
		alert('10자 이하로 입력해주세요');
		f.name.focus();
		return false;
	}
	if(f.email_1.value == "") {
		alert('이메일을 입력해주세요');
		f.email_1.focus();
		return false;
	}
	if(f.email_2.value == "0" && f.email_3.value=="") {
		alert('도메인 업체를 선택해주세요.');
		f.email_2.focus();
		return false;
	}
	if(f.tel2.value == "") {
		alert('전화번호를 입력해주세요');
		f.tel2.focus();
		return false;
	}
	if(isNaN(f.tel2.value)) {
		alert('전화번호를 정확히 입력해주세요');
		f.tel2.focus();
		return false;
	}
	if(f.tel3.value == "") {
		alert('전화번호를 입력해주세요');
		f.tel3.focus();
		return false;
	}
	if(isNaN(f.tel3.value)) {
		alert('전화번호를 정확히 입력해주세요');
		f.tel3.focus();
		return false;
	}
	var context = f.cont.value;

	if(context == "") {
		alert('내용을 입력해주세요');
		f.cont.focus();
		return false;
	}
	var tarea=context.replace(/</gm, "≤");
	document.qna.cont.value = tarea;

	if(f.passwd.value == "") {
		alert('비밀번호를 입력해주세요');
		f.passwd.focus();
		return false;
	}
	if(f.passwd.value.length > 11) {
		alert('10자이하로 입력해주세요');
		f.passwd.focus();
		return false;
	}
	return true;
}

function emailChk() {
	var f = document.email_frm;
			if(f.agree_2.checked == false)
			{
				f.agree_2.focus();
				alert('이용약관에 동의하셔야 합니다.');
				return false;
			}
			if(f.in_ck_1.checked == false)
			{
				f.in_ck_1.focus();
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				return false;
			}
			if(f.in_ck_2.checked == false)
			{
				f.in_ck_2.focus();
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				return false;
			}
			if(f.in_ck_3.checked == false)
			{
				f.in_ck_3.focus();
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				return false;
			}
			if(f.in_ck_4.checked == false)
			{
				f.in_ck_4.focus();
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				return false;
			}
			if(f.in_ck_5.checked == false)
			{
				f.in_ck_5.focus();
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				return false;
			}
			if(f.in_ck_6.checked == false)
			{
				f.in_ck_6.focus();
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				return false;
			}
			if(f.in_ck_7.checked == false)
			{
				f.in_ck_7.focus();
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				return false;
			}
			if(f.in_ck_8.checked == false)
			{
				f.in_ck_8.focus();
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				return false;
			}
			if(f.in_ck_9.checked == false)
			{
				f.in_ck_9.focus();
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				return false;
			}
			if(f.in_ck_10.checked == false)
			{
				f.in_ck_10.focus();
				alert('주요설명내용을 확인하셔야 가입할 수 있습니다.');
				return false;
			}
			if(f.agree_3.checked == false)
			{
				f.agree_3.focus();
				alert('이용약관에 동의하셔야 합니다.');
				return false;
			}
			if(f.agree_4.checked == false)
			{
				f.agree_4.focus();
				alert('이용약관에 동의하셔야 합니다.');
				return false;
			}
			if(f.agree_5.checked == false)
			{
				f.agree_5.focus();
				alert('개인정보보호정책에 동의하셔야 합니다.');
				return false;
			}
			if(f.agree_6.checked == false)
			{
				f.agree_6.focus();
				alert('개인정보보호정책에 동의하셔야 합니다.');
				return false;
			}	
	if(f.agr_0.value == "") {
		alert('단체명을 입력해주세요');
		f.agr_0.focus();
		return false;
	}
	if(f.agr_1.value == "") {
		alert('신청/담당자를 입력해주세요');
		f.agr_1.focus();
		return false;
	}

	if(f.agr_3.value == "") {
		alert('약관동의자를 입력해주세요');
		f.agr_3.focus();
		return false;
	}
	if(f.agr_2.value == "") {
		alert('약관교부자를 입력해주세요');
		f.agr_2.focus();
		return false;
	}
	if(f.tel_1.value == "") {
		alert('일반전화를 입력해주세요');
		f.tel_1.focus();
		return false;
	}
	if(isNaN(f.tel_1.value)) {
		alert('숫자만 입력 가능합니다.');
		f.tel_1.focus();
		return false;
	}
	if(f.tel_2.value == "") {
		alert('일반전화를 입력해주세요');
		f.tel_2.focus();
		return false;
	}
	if(isNaN(f.tel_2.value)) {
		alert('숫자만 입력 가능합니다.');
		f.tel_2.focus();
		return false;
	}
	if(f.cel_1.value == "") {
		alert('휴대전화를 입력해주세요');
		f.cel_1.focus();
		return false;
	}
	if(isNaN(f.cel_1.value)) {
		alert('숫자만 입력 가능합니다.');
		f.cel_1.focus();
		return false;
	}
	if(f.cel_2.value == "") {
		alert('휴대전화를 입력해주세요');
		f.cel_2.focus();
		return false;
	}
	if(isNaN(f.cel_2.value)) {
		alert('숫자만 입력 가능합니다.');
		f.cel_2.focus();
		return false;
	}
	if(f.email_1.value == "") {
		alert('이메일을 입력해주세요');
		f.email_1.focus();
		return false;
	}
	if(f.email_2.value =="0" || f.email_2.value =="") {
		alert('도메인 업체를 선택해주세요.');
		f.email_2.focus();
		return false;
	}
	if(f.email_2.value == "write" && f.email_3.value=="") {
		alert('도메인 업체를 입력해주세요.');
		f.email_3.focus();
		return false;
	}
	if(f.goji_0.value =="0") {
		alert('여행지를 선택해주세요.');
		f.goji_0.focus();
		return false;
	}
	if(f.goji_1.value =="0") {
		alert('여행지를 선택해주세요.');
		f.goji_1.focus();
		return false;
	}
	var start_date = f.start_date1.value + f.start_date2.value + f.start_date3.value + f.start_date4.value;
	var end_date = f.end_date1.value + f.end_date2.value + f.end_date3.value + f.end_date4.value;
	var cur_date = new Date().getTime();
	var now = new Date(f.start_date1.value, f.start_date2.value - 1, f.start_date3.value, f.start_date4.value - 1).getTime();
	if(now < cur_date){
		alert('시작일을 현재시간이후로 선택하시기 바랍니다.');
		f.start_date1.focus();
		f.category2.options[0].selected = true;
		return false;
	}
	if(start_date >= end_date){
		alert('기간을 정확히 입력해 주시기 바랍니다.');
		f.start_date1.focus();
		f.category2.options[0].selected = true;
		return false;
	}
	if(f.total_peo.value == "") {
		alert('인원을 입력해주세요');
		f.total_peo.focus();
		return false;
	}
	if(isNaN(f.total_peo.value)) {
		alert('숫자만 입력가능합니다.');
		f.total_peo.focus();
		return false;
	}
	if(f.category1.value == "0") {
		alert('상품을 선택해주세요');
		f.category1.focus();
		return false;
	}else {
		var string = f.category1.options[f.category1.selectedIndex].innerHTML;
		f.category1name.value = string;
	}
	if(f.category2.value == "0") {
		alert('상품을 선택해주세요');
		f.category2.focus();
		return false;
	}else {
		var string = f.category2.options[f.category2.selectedIndex].innerHTML;
		f.category2name.value = string;
	}
	if(f.plan.value == "") {
		alert('상품명을 입력해주세요');
		f.plan.focus();
		return false;
	}
	if(f.money[0].checked) {
		if(f.card_1.value =="0") {
			alert('카드사를 선택해주세요.');
			f.card_1.focus();
			return false;
		}
		if (f.card_date1.value == "0" || f.card_date1.value == "") {
		  alert("유효기간 선택해주세요");
		  f.card_date1.focus();
		  return false;
		}
		if (f.card_date2.value == "0" || f.card_date2.value == "") {
		  alert("유효기간 선택해주세요");
		  f.card_date2.focus();
		  return false;
		}
		if(f.card_num1.value == "") {
			alert('카드번호를 입력해주세요.');
			f.card_num1.focus();
			return false;
		}
		if(isNaN(f.card_num1.value)) {
			alert('숫자만 입력가능합니다.');
			f.card_num1.focus();
			return false;
		}
		if(f.card_num2.value == "") {
			alert('카드번호를 입력해주세요.');
			f.card_num2.focus();
			return false;
		}
		if(isNaN(f.card_num2.value)) {
			alert('숫자만 입력가능합니다.');
			f.card_num2.focus();
			return false;
		}
		if(f.card_num3.value == "") {
			alert('카드번호를 입력해주세요.');
			f.card_num3.focus();
			return false;
		}
		if(isNaN(f.card_num3.value)) {
			alert('숫자만 입력가능합니다.');
			f.card_num3.focus();
			return false;
		}
		if(f.card_num4.value == "") {
			alert('카드번호를 입력해주세요.');
			f.card_num4.focus();
			return false;
		}
		if(isNaN(f.card_num4.value)) {
			alert('숫자만 입력가능합니다.');
			f.card_num4.focus();
			return false;
		}
		if(f.cvc.value == "") {
			alert('cvc번호를 입력해주세요.');
			f.cvc.focus();
			return false;
		}
		if(isNaN(f.cvc.value)) {
			alert('숫자만 입력가능합니다.');
			f.cvc.focus();
			return false;
		}
		if(f.settle_name.value == "") {
			alert('카드소유주명을 입력해주세요.');
			f.settle_name.focus();
			return false;
		}
	}
	else if(f.money[1].checked) {
		if(f.settle_name.value =="") {
			alert('입금자명을 입력해주세요.');
			f.settle_name.focus();
			return false;
		}
	}
	if(f.attache.value == "") {
		alert('파일을 첨부해주세요');
		f.attache.focus();
		return false;
	}
	
	var apply_btn = document.getElementById('apply_btn');
		apply_btn.disabled = 'true';
	return true;
}

function ChkNtc () {
	var f = document.notice_4;

	if(!f.agr.checked) {
		alert('이용약관에 동의하셔야 신청가능합니다.');
		f.agr.focus();
		return false;
	}
	if(f.good[0].checked != true && f.good[1].checked != true ) {
		alert('유형을 선택해주세요.');
	return false;
	}
	else if(f.slc.value == "0") {
		alert('유형을 선택해주세요.');
	f.slc.focus();
	return false;
	}
	else if(f.when.value == "") {
		alert('일시를 입력해주세요.');
	f.when.focus();
	return false;
	}
	else if(f.title.value == "") {
		alert('제목을 입력해주세요.');
	f.title.focus();
	return false;
	}
	else if(f.cont.value == "") {
		alert('내용을 입력해주세요.');
	f.cont.focus();
	return false;
	}
	else if(f.reply[0].checked != true && f.reply[1].checked != true ) {
		alert('답변 수신 여부를 선택해주세요.');
	return false;
	}
	else if(f.name.value == "") {
		alert('이름을 입력해주세요.');
	f.name.focus();
	return false;
	}
	else if(f.tel.value == "") {
		alert('연락처를 입력해주세요.');
	f.tel.focus();
	return false;
	}
	else if(f.email.value == "") {
		alert('이메일을 입력해주세요.');
	f.email.focus();
	return false;
	}
return true;
}

function next_inq() {
	var frm = document.inquiry;
	if (frm.jumin_1.value.length >= 6)
	{
		frm.jumin_2.focus();
	}
}
function chk_inquiry() {
var a = document.inquiry.jumin_1;
var b = document.inquiry.jumin_2;
var pyear = a.value.substr(0, 2);
var pmonth = a.value.substr(2, 2);
var pday = a.value.substr(4, 2);
var pj = b.value.substr(0, 1);
var jumin1 = a.value.substr(0,6);
var jumin2 = b.value.substr(0,7);	
var mode = document.inquiry.mode.value;
	if(mode != "SEND_ACC") {
		if(!document.inquiry.pi_nm.value.trim()) {
			alert ("이름을 입력해주세요.");
			document.inquiry.pi_nm.focus();
			return false;

		}
	}
	if (pmonth > 12){
		alert ("주민번호를 정확히 입력해주세요.");
		a.value ="";
		a.focus();
		return false;
	}
	if (pday > 31){
		alert ("주민번호를 정확히 입력해주세요.");
		a.value ="";
		a.focus();
		return false;
	}

	if(a.value.length != 6 || b.value.length != 7) {
		alert ("잘못된 주민번호 입니다.");
		a.value = "";
		b.value = "";
		a.focus();
	  return false;
	}
	if(isNaN(a.value) || isNaN(b.value)) {
		alert ("잘못된 주민번호 입니다.");
		a.value = "";
		b.value = "";
		a.focus();
	  return false;
	}
	  if (!/[1-8]/.test(b.value.charAt(0))) {
		alert ("잘못된 주민번호 입니다.");
		a.value = "";
		b.value = "";
		a.focus();
		return false;
	  }


}
function c_mail(no) {
    window.open("c_mail.php?no="+no, "_blank", "toolbar=no, scrollbars=no, resizable=no, top=500, left=500, width=300, height=160");
}

  $(function() {
	  var a = document.getElementById('start_date');
	  if(a != null) {
	$( "#start_date, #end_date" ).datepicker({
			closeText: '닫기',
			prevText: '이전',
			nextText: '다음',
			currentText: '오늘',
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
			dayNames: ['일','월','화','수','목','금','토'],
			dayNamesShort: ['일','월','화','수','목','금','토'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
		 dateFormat: 'yy-mm-dd'		
	});
	  }
  });


$(function() {
	$('#icon_01').mouseover(function(){
		$("#icon_01").css({"opacity":"0.7", "filter" : "alpha(opacity=70)"});
	});
	$('#icon_01').mouseout(function(){
		$("#icon_01").css("opacity", "1");
	});
	$('#icon_02').mouseover(function(){
		$("#icon_02").css({"opacity":"0.7", "filter" : "alpha(opacity=70)"});
	});
	$('#icon_02').mouseout(function(){
		$("#icon_02").css("opacity", "1");
	});
	$('#icon_03').mouseover(function(){
		$("#icon_03").css({"opacity":"0.7", "filter" : "alpha(opacity=70)"});
	});
	$('#icon_03').mouseout(function(){
		$("#icon_03").css("opacity", "1");
	});
	$('#icon_04').mouseover(function(){
		$("#icon_04").css({"opacity":"0.7", "filter" : "alpha(opacity=70)"});
	});
	$('#icon_04').mouseout(function(){
		$("#icon_04").css("opacity", "1");
	});
	$('#icon_05').mouseover(function(){
		$("#icon_05").css({"opacity":"0.7", "filter" : "alpha(opacity=70)"});
	});
	$('#icon_05').mouseout(function(){
		$("#icon_05").css("opacity", "1");
	});
	$('#icon_06').mouseover(function(){
		$("#icon_06").css({"opacity":"0.7", "filter" : "alpha(opacity=70)"});
	});
	$('#icon_06').mouseout(function(){
		$("#icon_06").css("opacity", "1");
	});
	$('#icon_07').mouseover(function(){
		$("#icon_07").css({"opacity":"0.7", "filter" : "alpha(opacity=70)"});
	});
	$('#icon_07').mouseout(function(){
		$("#icon_07").css("opacity", "1");
	});
	$('#icon_08').mouseover(function(){
		$("#icon_08").css({"opacity":"0.7", "filter" : "alpha(opacity=70)"});
	});
	$('#icon_08').mouseout(function(){
		$("#icon_08").css("opacity", "1");
	});
	$('#icon_09').mouseover(function(){
		$("#icon_09").css({"opacity":"0.7", "filter" : "alpha(opacity=70)"});
	});
	$('#icon_09').mouseout(function(){
		$("#icon_09").css("opacity", "1");
	});

});

$(function() {
	$('#m_hos').mouseover(function(){
		$("#m_hos").css({"opacity":"0.7", "filter" : "alpha(opacity=70)"});
	});
	$('#m_hos').mouseout(function(){
		$("#m_hos").css("opacity", "1");
	});

});



  $(function() {
	$("#c_1" ).mouseover(function(){
		$("#l_pannel_img").attr('src', '/main/images/m_image_1.png');
		$("#l_pannel_img").on("click", function(e) {
			location.href = "/company_03.html";
		});
		$(".l_pannel > img").on("click", function(e) {
			location.href = "/company_03.html";
		});
	});

    $("#c_2" ).mouseover(function(){
		$("#l_pannel_img").attr('src', '/main/images/m_image_2.png');
		$("#l_pannel_img").on("click", function(e) {
			location.href = "/prepayment.html";
		});
		$(".l_pannel > img").on("click", function(e) {
			location.href = "/prepayment.html";
		});
	});

    $("#c_3" ).mouseover(function(){
		$("#l_pannel_img").attr('src', '/main/images/m_image_3.png');
		$("#l_pannel_img").on("click", function(e) {
			location.href = "/cooperate_1.html";
		});
		$(".l_pannel > img").on("click", function(e) {
			location.href = "/cooperate_1.html";
		});
	});
  });

function chkQnap(form) {
	if(form.pw.value == "") {
		alert('비밀번호를 입력해주세요.');
		form.pw.focus();
		return false;
	}
}



function engChk() {
	var f = document.engForm;
	if(!f.agr.checked) {
		alert('이용약관에 동의하셔야 신청가능합니다.');
		f.agr.focus();
		return false;
	}
	if(f.name.value == "") {
		alert('성명을 입력해주세요');
		f.name.focus();
		return false;
	}
	if(f.jumin_1.value == "") {
		alert('주민번호를 입력해주세요');
		f.jumin_1.focus();
		return false;
	}
	if(f.jumin_1.value.length != '6') {
		alert('주민번호를 정확히 입력해주세요');
		f.jumin_1.value ="";
		f.jumin_2.value ="";
		f.jumin_1.focus();
		return false;
	}
	if(f.jumin_2.value == "") {
		alert('주민번호를 입력해주세요');
		f.jumin_1.value ="";
		f.jumin_2.value ="";
		f.jumin_1.focus();
		return false;
	}
	if(f.jumin_2.value.length != '7') {
		alert('주민번호를 정확히 입력해주세요');
		f.jumin_1.value ="";
		f.jumin_2.value ="";
		f.jumin_1.focus();
		return false;
	}

var a = f.jumin_1;
var b = f.jumin_2;
var pyear = a.value.substr(0, 2);
var pmonth = a.value.substr(2, 2);
var pday = a.value.substr(4, 2);
var pj = b.value.substr(0, 1);
var jumin1 = a.value.substr(0,6);
var jumin2 = b.value.substr(0,7);	

	if (pmonth > 12){
		alert ("주민번호를 정확히 입력해주세요.");
		a.value ="";
		b.value ="";
		a.focus();
		return false;
	}
	if (pday > 31){
		alert ("주민번호를 정확히 입력해주세요.");
		a.value ="";
		b.value ="";
		a.focus();
		return false;
	}

	if (b.value.length == "7") {

    var sum = 0;
    sum += jumin1.charAt(0)*2;
    sum += jumin1.charAt(1)*3;
    sum += jumin1.charAt(2)*4;
    sum += jumin1.charAt(3)*5;
    sum += jumin1.charAt(4)*6;
    sum += jumin1.charAt(5)*7;
    sum += jumin2.charAt(0)*8;
    sum += jumin2.charAt(1)*9;
    sum += jumin2.charAt(2)*2;
    sum += jumin2.charAt(3)*3;
    sum += jumin2.charAt(4)*4;
    sum += jumin2.charAt(5)*5;

    check = (11 - sum % 11) % 10;

		if (jumin2.charAt(6) != check || (jumin1.length != 6 && jumin2.length != 7))
		{
			alert ("잘못된 주민번호 입니다.");
			a.value ="";
			b.value ="";
			a.focus();
		  return false;
		} 

		if(!(jumin2.charAt(0) == '1' || jumin2.charAt(0)  == '2' || jumin2.charAt(0) == '3' || jumin2.charAt(0) == '4'))
		{
			alert ("잘못된 주민번호 입니다.");
			a.value ="";
			b.value ="";
			a.focus();
		  return false;
		}
	}
	if(f.tel2.value == "") {
		alert('전화번호를 입력해주세요');
		f.tel2.focus();
		return false;
	}
	if(isNaN(f.tel2.value)) {
		alert('전화번호를 정확히 입력해주세요');
		f.tel2.value = "";
		f.tel2.focus();
		return false;
	}
	if(f.tel3.value == "") {
		alert('전화번호를 입력해주세요');
		f.tel3.focus();
		return false;
	}
	if(isNaN(f.tel3.value)) {
		alert('전화번호를 정확히 입력해주세요');
		f.tel3.value = "";
		f.tel3.focus();
		return false;
	}
	if(f.cel2.value == "") {
		alert('전화번호를 입력해주세요');
		f.cel2.focus();
		return false;
	}
	if(isNaN(f.cel2.value)) {
		alert('전화번호를 정확히 입력해주세요');
		f.cel2.value = "";
		f.cel2.focus();
		return false;
	}
	if(f.cel3.value == "") {
		alert('전화번호를 입력해주세요');
		f.cel3.focus();
		return false;
	}
	if(isNaN(f.cel3.value)) {
		alert('전화번호를 정확히 입력해주세요');
		f.cel3.value = "";
		f.cel3.focus();
		return false;
	}
	var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
	if (f.email.value == "")
	{
		alert('이메일을 입력해주세요');
		f.email.focus();
		return false;
	}
	email = f.email.value;
	if(regex.test(email) === false) {  
		email.value == "";
		alert("잘못된 이메일 형식입니다.");  
		email.focus();
		return false;  
	}
	if(f.cont_tel.value == "") {
		alert('수령인 연락처를 입력해주세요');
		f.cont_tel.focus();
		return false;
	}
	if(f.cont_tel.value.length > 20) {
		alert('수령인 연락처를 정확히 입력해주세요');
		f.cont_tel.focus();
		return false;
	}
}


function next_j() {
	var frm = document.engForm;
	if (frm.jumin_1.value.length >= 6)
	{
		frm.jumin_2.focus();
	}
}

function next_j_1() {
	var frm = document.claim_request;
	if (frm.jumin_1.value.length >= 6)
	{
		frm.jumin_2.focus();
	}
}


function crChk() {
	var f = document.claim_request;
	if(!f.agr.checked) {
		alert('이용약관에 동의하셔야 신청가능합니다.');
		f.agr.focus();
		return false;
	}

	if(f.name.value == "") {
		alert('성명을 입력해주세요');
		f.name.focus();
		return false;
	}
	if(f.jumin_1.value == "") {
		alert('주민번호를 입력해주세요');
		f.jumin_1.focus();
		return false;
	}
	if(f.jumin_1.value.length != '6') {
		alert('주민번호를 정확히 입력해주세요');
		f.jumin_1.value = "";
		f.jumin_2.value = "";
		f.jumin_1.focus();
		return false;
	}
	if(f.jumin_2.value == "") {
		alert('주민번호를 입력해주세요');
		f.jumin_2.focus();
		return false;
	}
	if(f.jumin_2.value.length != '7') {
		alert('주민번호를 정확히 입력해주세요');
		f.jumin_1.value = "";
		f.jumin_2.value = "";
		f.jumin_1.focus();
		return false;
	}

var a = f.jumin_1;
var b = f.jumin_2;
var pyear = a.value.substr(0, 2);
var pmonth = a.value.substr(2, 2);
var pday = a.value.substr(4, 2);
var pj = b.value.substr(0, 1);
var jumin1 = a.value.substr(0,6);
var jumin2 = b.value.substr(0,7);	

	if (pmonth > 12){
		alert ("주민번호를 정확히 입력해주세요.");
		a.value ="";
		b.value ="";
		a.focus();
		return false;
	}
	if (pday > 31){
		alert ("주민번호 <일> 정확히 입력해주세요.");
		a.value ="";
		b.value ="";
		a.focus();
		return false;
	}

	if (b.value.length == "7") {

    var sum = 0;
    sum += jumin1.charAt(0)*2;
    sum += jumin1.charAt(1)*3;
    sum += jumin1.charAt(2)*4;
    sum += jumin1.charAt(3)*5;
    sum += jumin1.charAt(4)*6;
    sum += jumin1.charAt(5)*7;
    sum += jumin2.charAt(0)*8;
    sum += jumin2.charAt(1)*9;
    sum += jumin2.charAt(2)*2;
    sum += jumin2.charAt(3)*3;
    sum += jumin2.charAt(4)*4;
    sum += jumin2.charAt(5)*5;

    check = (11 - sum % 11) % 10;

		if (jumin2.charAt(6) != check || (jumin1.length != 6 && jumin2.length != 7))
		{
			alert ("잘못된 주민번호 입니다.");
			a.value ="";
			b.value ="";
			a.focus();
		  return false;
		} 

		if(!(jumin2.charAt(0) == '1' || jumin2.charAt(0)  == '2' || jumin2.charAt(0) == '3' || jumin2.charAt(0) == '4'))
		{
			alert ("잘못된 주민번호 입니다.");
			a.value ="";
			b.value ="";
			a.focus();
		  return false;
		}
	}
	if(f.tel2.value == "") {
		alert('전화번호를 입력해주세요');
		f.tel2.focus();
		return false;
	}
	if(isNaN(f.tel2.value)) {
		alert('전화번호를 정확히 입력해주세요');
		f.tel2.value = "";
		f.tel2.focus();
		return false;
	}
	if(f.tel3.value == "") {
		alert('전화번호를 입력해주세요');
		f.tel3.focus();
		return false;
	}
	if(isNaN(f.tel3.value)) {
		alert('전화번호를 정확히 입력해주세요');
		f.tel3.value = "";
		f.tel3.focus();
		return false;
	}
	if(f.cel2.value == "") {
		alert('전화번호를 입력해주세요');
		f.cel2.focus();
		return false;
	}
	if(isNaN(f.cel2.value)) {
		alert('전화번호를 정확히 입력해주세요');
		f.cel2.value = "";
		f.cel2.focus();
		return false;
	}
	if(f.cel3.value == "") {
		alert('전화번호를 입력해주세요');
		f.cel3.focus();
		return false;
	}
	if(isNaN(f.cel3.value)) {
		alert('전화번호를 정확히 입력해주세요');
		f.cel3.value = "";
		f.cel3.focus();
		return false;
	}
	var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
	if (f.email.value == "")
	{
		alert('이메일을 입력해주세요');
		f.email.focus();
		return false;
	}
	email = f.email.value;
	if(regex.test(email) === false) {  
		email.value == "";
		alert("잘못된 이메일 형식입니다.");  
		email.focus();
		return false;  
	}
	if(f.cont_tel.value == "") {
		alert('사고장소를 입력해주세요');
		f.cont_tel.focus();
		return false;
	}
}


function seach_hos() {
	var frm = document.serach_hp;
	if(frm.s_type.value == "0" || frm.s_type.value == undefined ) {
		alert('조회 구분을 선택바랍니다.');
		frm.s_type.focus();
		return false;
	}
	if(frm.s_type.value == "name") {
		if(!frm.search.value) {
		alert('병원명을 입력바랍니다.');
		frm.search.focus();
		return false;
		}	
	}
	if(frm.s_type.value == "town") {
		if(!frm.search.value) {
		alert('국가명을 입력바랍니다.');
		frm.search.focus();
		return false;
		}	
	}
}


function chk_5f() {
	var j = $( "input[name='nums']" ).val();
	var frm=document.application_5;


for($i=0; $i < j; $i++){

		var peo_nums = $i+1;
		if(frm.elements['prd_name_'+$i].value == ""){
			alert(peo_nums+"번째 상품을 선택해해주세요");
			frm.elements['prd_name_'+$i].focus();
			return false;
		}
		if(frm.elements['pre_'+$i].value == ""){
			alert(peo_nums+"번째 상품을 선택해해주세요");
			frm.elements['pre_'+$i].focus();
			return false;
		}		
	}	
}


function footer_select() {
	var a = document.getElementById('footer_select').value;
	if(a == "0") {
		return false;
	}else if(a == "B2B") {
		window.open("/b2b/join_login.html", "_self");
	}else if(a == "지사K") {
		window.open("/join_eng/branch_index2.html?lang=kor", "_self");
	}else if(a == "지사C") {
		window.open("/join_eng/branch_index2.html?lang=chn", "_self");
	}else if(a == "지사E") {
		window.open("/join_eng/branch_index2.html?lang=eng", "_self");
	}else if(a == "영문") {
		window.open("/insu_eng/", "_self");
	}
}




function pay_la() {
window.open ("/pay_later.html", "_target");
}


function chk_ModFrm(){
	f = document.ModForm;
	if(f.agr_1[0].checked) {
		alert('약관에 동의해야만 신청가능합니다.');
		f.agr_1[1].focus();
		return false;
	}
	if(f.app1.value =="") {
		alert('청약번호를 적어주세요');
		f.app1.focus();
		return false;
	}
	if(isNaN(f.app1.value)) {
		alert('청약번호를 숫자로 적어주세요');
		f.app1.focus();
		return false;
	}
	if(f.app2.value =="") {
		alert('청약번호를 적어주세요');
		f.app2.focus();
		return false;
	}
	if(isNaN(f.app2.value)) {
		alert('청약번호를 숫자로 적어주세요');
		f.app2.focus();
		return false;
	}
	if(f.name.value =="") {
		alert('단체명을 적어주세요');
		f.name.focus();
		return false;
	}
	if(f.asker.value =="") {
		alert('신청자명을 적어주세요');
		f.asker.focus();
		return false;
	}
	if(f.tel1.value =="") {
		alert('휴대폰 번호를 적어주세요');
		f.tel1.focus();
		return false;
	}
	if(isNaN(f.tel1.value)) {
		alert('휴대폰 번호를  숫자로 적어주세요');
		f.tel1.focus();
		return false;
	}
	if(f.tel2.value =="") {
		alert('휴대폰 번호를  적어주세요');
		f.tel2.focus();
		return false;
	}
	if(isNaN(f.tel2.value)) {
		alert('휴대폰 번호를  숫자로 적어주세요');
		f.tel2.focus();
		return false;
	}
	if(f.tel3.value =="") {
		alert('휴대폰 번호를  적어주세요');
		f.tel3.focus();
		return false;
	}
	if(isNaN(f.tel3.value)) {
		alert('휴대폰 번호를  숫자로 적어주세요');
		f.tel3.focus();
		return false;
	}

	var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
	if (f.email.value == "")
	{
		alert('이메일을 입력해주세요');
		f.email.focus();
		return false;
	}
	email = f.email.value;
	if(regex.test(email) === false) {  
		email.value == "";
		alert("잘못된 이메일 형식입니다.");  
		email.focus();
		return false;  
	}
	var context = f.cont.value;

	if(context == "") {
		alert('내용을 입력해주세요');
		f.cont.focus();
		return false;
	}
	var tarea=context.replace(/</gm, "≤");
	context = tarea;

	if(f.mod_pay.value =="0") {
		alert('차액발생시를  선택해주세요');
		f.mod_pay.focus();
		return false;
	}

	var cont_pay = f.cont_pay.value;

	if(cont_pay == "") {
		alert('내용을 입력해주세요');
		f.cont_pay.focus();
		return false;
	}
	var tarea=cont_pay.replace(/</gm, "≤");
	cont_pay = tarea;
	
	return true;
}

function warn() {
window.open ("http://www.0404.go.kr/country/warningList.do?menuNo=1030000", "_target");
}

function position(index, tab) {
	var hos_frame = document.getElementById("simple_map");
	var url = hos_frame.src='/simple_map.html?tab='+tab+'&no='+index;
	
	    $("#simple_map").fadeOut(200, function() { // fade out iframe
        document.getElementById("simple_map").src = url; // on completion of fade out - change iframe src attribute
        $("#simple_map").fadeIn(3000); //fade in iframe
		});

}

function search_e() {
	var frm = document.search_email;

	if(!frm.email.value) {
		alert("이메일을 입력해주세요.");
		frm.email.focus();
		return false;
	}
	var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
	email = frm.email.value;
	if(regex.test(email) === false) {  
		email.value == "";
		alert("잘못된 이메일 형식입니다.");  
		frm.email.focus();
		return false;  
	}
	if(!frm.app_nm.value) {
		alert("접수담당자명을 입력해주세요.");
		frm.app_nm.focus();
		return false;
	}
		return true;
}


		function bro_hide_img() {
				var bro_show = document.getElementById('bro_show_d');
				$(bro_show).css("display", "none");
		}




function chn_s () {
	var f = document.chn_send;
	if(!f.nm_0.value.trim()) {
		alert('이름을 입력해주세요.');
		f.nm_0.focus();
		return false;
	}
	if(!f.bday_0.value.trim()) {
		alert('생년월일 입력해주세요.');
		f.bday_0.focus();
		return false;
	}
	if(!f.gender_0.value.trim()) {
		alert('성별을 입력해주세요.');
		f.gender_0.focus();
		return false;
	}
	if(f.addr1.value == "0") {
		alert('거주 도시를 선택해주세요.');
		f.addr1.focus();
		return false;	
	}
	if(!f.addr2.value.trim()) {
		alert('구를 입력해주세요.');
		f.addr2.focus();
		return false;
	}
	var c_type = document.getElementById("con_type").innerHTML;	
	if(!f.con_type_value.value.trim()) {
		alert(c_type + '를 입력해주세요.');
		f.con_type_value.focus();
		return false;
	}
	if(c_type == "메일") {
		var regex = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/; 
		var email = f.con_type_value.value;
		if(email.match(regex) == null) {
			alert('잘못된 이메일 형식입니다.');
			f.con_type_value.focus();
			return false;
		}
	}
	if(!$(':radio[name="con_root"]:checked').val()){
		alert("유입 경로를 선택해주세요.");
		return false;
	}
	if($(':radio[name="con_root"]:checked').val() == "기타") {
		if(!f.etc_root.value.trim()) {
			alert('기타 유입 경로를 입력해주세요.');
			f.etc_root.focus();
			return false;
		}
	}
f.ac.value = "SEND";
return true;
}