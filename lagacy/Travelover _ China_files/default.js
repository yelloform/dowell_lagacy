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
			alert('����� ������ Ȯ�εǾ�, ����� ���� �������� �̵��մϴ�.');
			 window.location.href = "http://m.tourinsu.co.kr/";
	   break;
		 }
}
*/

	/* �ش� �޴�  */
	$('.tab_2 li').mouseover(function(){
		switch(this.className){
			case '1' : $('.header_tab div').html('<a href="/policy_01.html"><span class="tab1">�ؿܿ���</span></a><a href="/policy_02.html"><span>��������</span></a><a href="/policy_03.html"><span>���ü��</span></a><a href="/policy_04.html"><span>��Ű����</span></a>'); break;
			case '2' : $('.header_tab div').html('<a href="/check_insurance.html"><span class="tab2">�����˾ƺ���</span></a>'); break;
			case '3' : $('.header_tab div').html('<a href="/application.html"><span class="tab3">�ǽð����谡��(B2C)</span></a><a href="/email.html"><span>�̸��Ϻ��谡�Խ�û</span></a><a href="/b2b/join_login.html"><span>���ޱ��(B2B)����</span></a><a href="/app_modify.html"><span>������ ��������ҽ�û</span></a><a href="/join_eng/branch_index2.html"><span>�ؿ�����(Branch Network)</span></a>'); break;
			case '4' : $('.header_tab div').html('<a href="/inquiry.html"><span class="tab4">�����ȸ �� ����Ȯ��</span></a><a href="/search_email.html"><span>�̸��Ϻ��谡�� ó����Ȳ</span></a><a href="/accident.html"><span>���ó�� �����Ȳ</span></a><a href="/hospital.html"><span>���޺��� ��ȸ</span></a>'); break;
			case '5' : $('.header_tab div').html('<a href="/download.html"><span class="tab5">�ٿ�ε�</span></a><a href="/claim.html"><span>����� û�� ���񼭷�</span></a><a href="/claim_request.html"><span>����� ���񼭷� ��û</span></a><a href="/join_eng.html"><span>������������ ��û</span></a><a href="/death_benefit.html"><span>�������� ������ ����</span></a>'); break;
			case '6' : $('.header_tab div').html('<a href="/notice_01.html"><span class="tab6">����</span></a><a href="/notice_02.html"><span>�����ϴ�����</span></a><a href="/notice_03.html"><span>Q&amp;A</span></a><a href="/notice_04.html"><span>���� �Ҹ�</span></a><a href="/notice_05.html"><span>������⼳ġ�ȳ�</span></a>'); break;
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
			alert('����� �����ؾ߸� ������ �� �ֽ��ϴ�.');
		});

		window.application_2.onsubmit = function(){
			if(application_2.agree_2.checked == false)
			{
				alert('�̿����� �����ϼž� �մϴ�.');
				application_2.agree_2.focus();
				return false;
			}
			if(application_2.in_ck_1.checked == false)
			{
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				application_2.in_ck_1.focus();
				return false;
			}
			if(application_2.in_ck_2.checked == false)
			{
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				application_2.in_ck_2.focus();
				return false;
			}
			if(application_2.in_ck_3.checked == false)
			{
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				application_2.in_ck_3.focus();
				return false;
			}
			if(application_2.in_ck_4.checked == false)
			{
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				application_2.in_ck_4.focus();
				return false;
			}
			if(application_2.in_ck_5.checked == false)
			{
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				application_2.in_ck_5.focus();
				return false;
			}
			if(application_2.in_ck_6.checked == false)
			{
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				application_2.in_ck_6.focus();
				return false;
			}
			if(application_2.in_ck_7.checked == false)
			{
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				application_2.in_ck_7.focus();
				return false;
			}
			if(application_2.in_ck_8.checked == false)
			{
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				application_2.in_ck_8.focus();
				return false;
			}
			if(application_2.in_ck_9.checked == false)
			{
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				application_2.in_ck_9.focus();
				return false;
			}
			if(application_2.in_ck_10.checked == false)
			{
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				application_2.in_ck_10.focus();
				return false;
			}
			if(application_2.agree_3.checked == false)
			{
				alert('�̿����� �����ϼž� �մϴ�.');
				application_2.agree_3.focus();
				return false;
			}
			if(application_2.agree_4.checked == false)
			{
				alert('�̿����� �����ϼž� �մϴ�.');
				application_2.agree_4.focus();
				return false;
			}
			if(application_2.agree_5.checked == false)
			{
				alert('����(�ſ�)������ �������̿뿡 �����ϼž� �մϴ�.');
				application_2.agree_5.focus();
				return false;
			}
			if(application_2.agree_6.checked == false)
			{
				alert('����(�ſ�)������ ��ȸ�� �����ϼž� �մϴ�.');
				application_2.agree_6.focus();
				return false;
			}
			if(application_2.agree_7.checked == false)
			{
				alert('����(�ſ�)������ ������ �����ϼž� �մϴ�.');
				application_2.agree_7.focus();
				return false;
			}
			if(application_2.agree_8.checked == false)
			{
				alert('�ΰ������� �� �����ĺ������� ó���� �����ϼž� �մϴ�.');
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
		alert ("�̸��� �Է����ּ���.");
	c.focus();
	return false; 
	}
	if(a.value == "") {
		alert ("�ֹι�ȣ�� �Է����ּ���.");
	a.focus();
	return false; 
	}
	if(a.value.length < "6") {
		alert ("�ֹι�ȣ�� ��Ȯ�� �Է����ּ���.");
		a.value ="";
		b.value ="";
		a.focus();
	return false; 
	}	
	if(b.value == "") {
		alert ("�ֹι�ȣ�� �Է����ּ���.");
	b.focus();
	return false; 
	}
	if(b.value.length < "7") {
		alert ("�ֹι�ȣ�� ��Ȯ�� �Է����ּ���.");
		a.value ="";
		b.value ="";
		a.focus();
	return false; 
	}	


	if (pmonth > 12){
		alert ("�ֹι�ȣ�� ��Ȯ�� �Է����ּ���");
		a.value ="";
		b.value ="";
		a.focus();
		return false;
	}
	if (pday > 31){
		alert ("�ֹι�ȣ�� �� ��Ȯ�� �Է����ּ���");
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
		alert ("�߸��� �ֹι�ȣ �Դϴ�.");
		a.value = "";
		b.value = "";
		a.focus();
      return false;
    } 

    if(!(jumin2.charAt(0) == '1' || jumin2.charAt(0)  == '2' || jumin2.charAt(0) == '3' || jumin2.charAt(0) == '4'))
    {
		alert ("�߸��� �ֹι�ȣ �Դϴ�.");
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
				/*console.log('����');*/
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

					if($(this).val() == "����") {
						document.getElementById('con_type').innerHTML = $(this).val() + " �ּ�";
					} else if($(this).val() == "īī����" || $(this).val() == "WeChat")  { 
						document.getElementById('con_type').innerHTML = $(this).val() + " ID";
					} else if ($(this).val() == "��ȭ")  { 
						document.getElementById('con_type').innerHTML = $(this).val() + " ��ȣ";
					}
			});
		}
		$(':radio[name="con_root"]').click(function(){

			 if($(':radio[name="con_root"]:checked').val() == "��Ÿ"){
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
alert ("�ֹι�ȣ�� ��Ȯ�� �Է����ּ���."); 
a.val("");
c.val("");
a.focus();
return false; 
} 
if (pday > 31){ 
alert ("�ֹι�ȣ�� ��Ȯ�� �Է����ּ���."); 
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
alert ("�߸��� �ֹι�ȣ �Դϴ�."); 
a.val("");
b.val("");
c.val("");
a.focus();
return false; 
    } 

    if(!($(b).val().charAt(0) == '1' || $(b).val().charAt(0)  == '2' || $(b).val().charAt(0) == '3' || $(b).val().charAt(0) == '4')) 
    { 
alert ("�߸��� �ֹι�ȣ �Դϴ�."); 
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
	alert("������ڰ� �������� ���� ���� �Դϴ�. ");
	document.getElementById('jumin_2_'+idx).value= ''; 
	frm.end_date.focus();
	return false;	 	  	
}

if ( (  startDay == endDay)  && (parseInt(frm.end_date4.value) - parseInt(frm.start_date4.value) < 2) ) 
{
	alert("��� ���� �ð��� ��Ȯ�� �������ּ���.");
	document.getElementById('jumin_2_'+idx).value= ''; 
	frm.start_date.focus();
	return false;   	}

var nowTimeStamp = new Date().getTime();
var inTimeStamp = new Date(s_dttm[0], s_dttm[1] - 1, s_dttm[2], frm.start_date4.value - 1).getTime();

if (nowTimeStamp > inTimeStamp)
{
	alert("��� �ð��� ����ð� ���ķ� �Է��ϼ���.");
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


document.getElementById('jumin_num_'+idx).value= "���質��"+getAge+"��"; 
	} 
} 


$(document).ready(function(){ 
	var idx =+ 1;
   $("#add_p, #add_p_1, #add_p_2").click(function() { 
	   if(idx >= 20) {
			alert("�����ο��� 20�� �̻��� ���, ��� '�̸��� ���谡�� ��û'�� �̿�ٶ��ϴ�. �ڼ��� ������ ���� �����ֽø� �ȳ��帮�ڽ��ϴ�");

	   } else {
				  $("#contractor").append( 
					  '<div class="clear"></div>'
					+'<div class="peo_added_'+idx+'" id="peo_added"> <p class="n_ppl">���� �߰� �ο� '+ idx +'��°</p>'
				  +'<div class="contractor">'
				+'<div class="contractor_group">'
						+'<div class="contractor_left">'
							+'<span>�̸�</span>'
						+'</div>'
						+'<div class="contractor_right">'
							+'<span>'
								+'�ѱ� <input type="text" name="nm_'+idx+'"/> ���� <input type="text" name="engnm_'+idx+'"/>' /*�����ο� ����<img src="/main/images/del_btn.png" onclick="now_del('+idx+');">'*/
							+'</span>'
						+'</div>'
					+'</div>'
					+'<div class="contractor_group">'
						+'<div class="contractor_left">'
							+'<span>�ֹε�Ϲ�ȣ</span>'
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
						+'<div class="ppl_ids"><img src="/main/images/all_same.png" onclick="all_same('+idx+')" alt="�ϰ�����" style="cursor: pointer;">Ŭ�� ��, �̸��� �ֹι�ȣ�� ������ ������ ����(�������� �� ��������)�� �����ϰ� �Էµ˴ϴ�.</div>'
					+'<div class="contractor_group_02">'
						+'<div class="contractor_left">'
							+'<span>����ȭ</span>'
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
							+'<span>�ڵ�����ȣ</span>'
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
							+'<span>�ּ�</span>'
						+'</div>'
						+'<div class="contractor_right">'
							+'<span>'
								+'<a href="javascript:execDaumPostcode('+idx+');"><img src="/main/images/post_search.png" alt="�����ȣ ã��"/></a>'
							+'</span>'
							+'<span>'
								+'�⺻�ּ� <input size="10" type="/text"/ name="add_0_'+idx+'" id="add_0_'+idx+'" readonly="readonly" onclick="javascript:execDaumPostcode('+idx+');"><input size="48" type="/text"/ name="add_1_'+idx+'" id="add_1_'+idx+'" readonly="readonly" onclick="javascript:execDaumPostcode('+idx+');">'
							+'</span>'
							+'<span>'
								+'���ּ� <input size="60" type="/text"/ name="add_2_'+idx+'" >'
							+'</span>'
						+'</div>'
					+'</div>'
					+'<div class="contractor_group">'
						+'<div class="contractor_left">'
							+'<span>�̸��� �ּ�</span>'
						+'</div>'
						+'<div class="contractor_right">'
							+'<span>'
								+'<input type=text name="email_1_'+idx+'" style="ime-mode:disabled"   size="30" maxlength=30 > &#64; '
								+'<select name="email_2_'+idx+'" onchange="javascript:focus_mailtext('+idx+');"   style="width:150px; margin-right: 10px;">'
									+'<option value="0">�����ϼ���</option>'
									+'<optION value="daum.net" > daum.net  </option>'
									+'<optION value="naver.com" > naver.com  </option>'
									+'<optION value="gmail.com" > gmail.com  </option>'
									+'<optION value="hanmail.net" > hanmail.net  </option>'
									+'<optION value="msn.com" > msn.com  </option>'
									+'<optION value="nate.com" > nate.com  </option>'
									+'<optION value="yahoo.com" > yahoo.com  </option>'
									+'<optION value="yahoo.co.kr" > yahoo.co.kr  </option>'
									+'<option value="write">�����Է�</option>'
								+'</select>'
								+'<input type="text" name="email_3_'+idx+'"  style="display: none;"   size="20" maxlength="50" class="css_input_textbox">'
								+'<button type="button" style="width: 100px; height: 20px; border:1px solid black; border-radius: 3px;"  name="email_4_'+idx+'"  onclick="javascript:nonfocus_mailtext('+idx+');"  >���ϼ���</button>'
							+'</span>'
						+'</div>'
					+'</div>'
					+'<div class="contractor_group">'
						+'<div class="contractor_left test_666">'
							+'<span>��������</span>'
						+'</div>'
						+'<div class="contractor_right">'
							+'<span>'
							+'������  '
							+'<select name="goji_9_'+idx+'" style="width:120px" onchange="javascript:Desti('+idx+');" >'
								+'<option value="0">�������ּ���</option>'
								+'<option value="�ؿ�">�ؿ�</option>'
								+'<option value="����Ư����">����Ư����</option>'
								+'<option value="�λ걤����">�λ걤����</option>'
								+'<option value="�뱸������">�뱸������</option>'
								+'<option value="��õ������">��õ������</option>'
								+'<option value="���ֱ�����">���ֱ�����</option>'
								+'<option value="����������">����������</option>'
								+'<option value="��걤����">��걤����</option>'
								+'<option value="����Ư����ġ��">����Ư����ġ��</option>'
								+'<option value="��⵵">��⵵</option>'
								+'<option value="������">������</option>'
								+'<option value="��û�ϵ�">��û�ϵ�</option>'
								+'<option value="��û����">��û����</option>'
								+'<option value="����ϵ�">����ϵ�</option>'
								+'<option value="���󳲵�">���󳲵�</option>'
								+'<option value="���ϵ�">���ϵ�</option>'
								+'<option value="��󳲵�">��󳲵�</option>'
								+'<option value="����Ư����ġ��">����Ư����ġ��</option>'
							+'</select>'
							+'  <select name="goji_10_'+idx+'" style="width:120px">'
								+'<option value="0">'
									+'�������ּ���'
								+'</option>'
							+'</select>'
							+'</span>'
							+'<span>'
								+'�������  '
								+'<select name="tour_reason_'+idx+'" style="width: 80px;">'
									+'<option value="0">����</option>'
									+'<option value="����">����</option>'
									+'<option value="���п���">���п���</option>'
									+'<option value="����">����</option>'
									+'<option value="����">����</option>'
									+'<option value="�����">�����</option>'
									+'<option value="��ŷȦ������">��ŷȦ������</option>'
									+'<option value="��Ÿ" >��Ÿ</option>'
								+'</select>'
							+'</span>'
							+'<span>'
								+'�ⱹ����  '
								+'<select style="width:80px" name="goji_7_'+idx+'" onChange="javascript:moveChoice(this);">'
									+'<option value="0">����</option>'
									+'<option value="�ⱹ��">�ⱹ��</option>'
									+'<option value="�ⱹ��">�ⱹ��</option>'
								+'</select>'
							+'</span>'
							+'<span>'
								+'����  '
								+'<select name="goji_8_'+idx+'" style="width: 80px;">'
									+'<option value="0">����</option>'
									+'<option value="ȸ���">ȸ���</option>'
									+'<option value="�л�">�л�</option>'
									+'<option value="�ֺ�">�ֺ�</option>'
									+'<option value="�ڿ���">�ڿ���</option>'
									+'<option value="������">������</option>'
									+'<option value="������">������</option>'
									+'<option value="�Ƿ���">�Ƿ���</option>'
									+'<option value="������">������</option>'
									+'<option value="������">������</option>'
									+'<option value="������">������</option>'
									+'<option value="�����">�����</option>'
									+'<option value="�����">�����</option>'
									+'<option value="������">������</option>'
									+'<option value="����/����">����/����</option>'
									+'<option value="���">���</option>'
									+'<option value="�����">�����</option>'
									+'<option value="����">����</option>'
									+'<option value="����">����</option>'
									+'<option value="���񽺾�">���񽺾�</option>'
									+'<option value="����">����</option>'
									+'<option value="����">����</option>'
									+'<option value="��Ÿ">��Ÿ</option>'
								+'</select>'
							+'</span>'
							+'<span class="line">'
							+'</span>'
							+'<span>'
								+'����ǰ�����  '
								+'<select style="width:80px" name="goji_3_'+idx+'">'
									+'<option value="0">����</option>'
									+'<option value="��ȣ">��ȣ</option>'
									+'<option value="�ҷ�">�ҷ�</option>'
								+'</select>'
							+'</span>'
							+'<span>'
								+'��������ȯ  '
								+'<select style="width:80px" name="goji_4_'+idx+'">'
									+'<option value="0">����</option>'
									+'<option value="����">����</option>'
									+'<option value="����">����</option>'
								+'</select>'
							+'</span>'
							+'<span>'
								+'���Ż�����  '
								+'<select style="width:80px" name="goji_5_'+idx+'">'
									+'<option value="0">����</option>'
									+'<option value="����">����</option>'
									+'<option value="����">����</option>'
								+'</select>'
							+'</span>'
							+'<span>'
								+'��ɼ����  '
								+'<select style="width:80px" name="goji_6_'+idx+'">'
									+'<option value="0">����</option>'
									+'<option value="����">����</option>'
									+'<option value="����">����</option>'
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
			alert('1�� ���Ϸ� ���� �� �� �����ϴ�.');
			}
		else {
					idx--;
		$(".peo_added_"+idx).remove();
		$( "input[name='nums']" ).val(idx);
		}
	});




/* ���� �� �Է��� �� �ְ��ϴ� �̺�Ʈ ���� ���� jay*/
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
			alert('1�� ���Ϸ� ���� �� �� �����ϴ�.');
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
 if (Choice=="�ⱹ��") { 
  alert("�ؿ� ���� ���Խ� �����Ȯ�μ� �ۼ� �� ������ �����մϴ�. \n���� ��ȭ �Ǵ� email ���� �ٶ��ϴ�. \n\n ���� +82 2-334-0040 / ���� 1644-5544����Email: travelover@travelover.co.kr \n\n �����Ȯ�μ� �ۼ� �������� �̵��մϴ�." ); 
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
		alert("�ű԰���/�簡�� ����");
		return false;
	}
	 if($(':radio[name="a_route"]:checked').val() == "1"){
		if($(':radio[name="new_select"]:checked').val() == undefined ){
			alert("���԰�� ���ùٶ��ϴ�.");
			return false;
		}
		if($(':radio[name="new_select"]:checked').val() == "1") {
			if($(':radio[name="search_select"]:checked').val() == undefined){
				alert("�˻���� ���ùٶ��ϴ�..");
				return false;
			}		
		}
	}

	for($i=0; $i < j; $i++){
		k= $i+1;
		for (; k<j; k++)
			{
			if (frm.elements['jumin_1_'+[$i]].value+frm.elements['jumin_2_'+[$i]].value == frm.elements['jumin_1_'+[k]].value+frm.elements['jumin_2_'+[k]].value) {
				alert('�ֹι�ȣ�� �ߺ��˴ϴ�.');
				frm.elements['jumin_1_'+[k]].value = "";
				frm.elements['jumin_2_'+[k]].value = "";
				frm.elements['jumin_1_'+[k]].focus();
			return false;
			}
	}
	for($i=0; $i < j; $i++){
		var peo_nums = $i+1;
		if(frm.elements['nm_'+$i].value == ""){
			alert(peo_nums+"��° �̸��� �Է����ּ���");
			frm.elements['nm_'+$i].focus();
			return false;
		}
		if(frm.elements['engnm_'+$i].value == ""){
			alert(peo_nums+"��° ���� �̸��� �Է����ּ���");
			frm.elements['engnm_'+$i].focus();
			return false;
		}
		if(frm.elements['jumin_1_'+$i].value == ""){
			alert(peo_nums+"��° �ֹι�ȣ�� �Է����ּ���");
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(frm.elements['jumin_1_'+$i].value.length !=  "6"){		
			alert(peo_nums+"��° �ֹι�ȣ�� ��Ȯ�� �Է����ּ���");
			frm.elements['jumin_1_'+$i].value = "";
			frm.elements['jumin_2_'+$i].value = "";
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['jumin_1_'+$i].value)){
			alert(peo_nums+"��° �ֹι�ȣ�� ��Ȯ�� �Է����ּ���");
			frm.elements['jumin_1_'+$i].value = "";
			frm.elements['jumin_2_'+$i].value = "";
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(frm.elements['jumin_2_'+$i].value == ""){
			alert(peo_nums+"��° �ֹι�ȣ�� �Է����ּ���");
			frm.elements['jumin_1_'+$i].value = "";
			frm.elements['jumin_2_'+$i].value = "";
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(frm.elements['jumin_2_'+$i].value.length != "7"){
			alert(peo_nums+"��° �ֹι�ȣ�� ��Ȯ�� �Է����ּ���");
			frm.elements['jumin_1_'+$i].value = "";
			frm.elements['jumin_2_'+$i].value = "";
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['jumin_2_'+$i].value)){
			alert(peo_nums+"��° �ֹι�ȣ�� ��Ȯ�� �Է����ּ���");
			frm.elements['jumin_1_'+$i].value = "";
			frm.elements['jumin_2_'+$i].value = "";
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(frm.elements['jumin_num_'+$i].value == ""){
			alert("�ֹι�ȣ�� �Է����ּ���");
			frm.elements['jumin_1_'+$i].focus();
			return false;
		}
		if(frm.elements['tel_1_'+$i].value == ""){
			alert("��ȭ��ȣ�� �Է����ּ���");
			frm.elements['tel_1_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['tel_1_'+$i].value)){
			alert("��ȭ��ȣ�� ��Ȯ�� �Է����ּ���");
			frm.elements['tel_1_'+$i].focus();
			return false;
		}
		if(frm.elements['tel_2_'+$i].value == ""){
			alert("��ȭ��ȣ�� �Է����ּ���");
			frm.elements['tel_2_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['tel_2_'+$i].value)){
			alert("��ȭ��ȣ�� ��Ȯ�� �Է����ּ���");
			frm.elements['tel_2_'+$i].focus();
			return false;
		}
		if(frm.elements['cel_1_'+$i].value == ""){
			alert("�ڵ�����ȣ�� �Է����ּ���");
			frm.elements['cel_1_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['cel_1_'+$i].value)){
			alert("�ڵ�����ȣ�� ��Ȯ�� �Է����ּ���");
			frm.elements['cel_1_'+$i].focus();
			return false;
		}
		if(frm.elements['cel_2_'+$i].value == ""){
			alert("�ڵ�����ȣ�� �Է����ּ���");
			frm.elements['cel_2_'+$i].focus();
			return false;
		}
		if(isNaN(frm.elements['cel_2_'+$i].value)){
			alert("�ڵ�����ȣ�� ��Ȯ�� �Է����ּ���");
			frm.elements['cel_2_'+$i].focus();
			return false;
		}
		if(frm.elements['add_0_'+$i].value == ""){
			alert("�ּҸ� �������ּ���");
			frm.elements['add_0_'+$i].focus();
			return false;
		}
		if(frm.elements['add_1_'+$i].value == ""){
			alert("�ּҸ� �������ּ���");
			frm.elements['add_1_'+$i].focus();
			return false;
		}
		if(frm.elements['add_2_'+$i].value == ""){
			alert("���ּҸ� �Է����ּ���");
			frm.elements['add_2_'+$i].focus();
			return false;
		}
		
		var email1 = frm.elements['email_1_'+$i].value;

		// var email2=frm.email_2.[frm.email_2.selectedIndex].value;
		var email2 = frm.elements['email_2_'+$i].value;
		var email3 = frm.elements['email_3_'+$i].value;

		email1 = email1.replace(/^\s*(\b.*\b|)\s*$/, "$1"); // ������ �հ� ���� ���� ����

		if (email1 == "") {
			alert("Email ID�� �Է��ϼž� �մϴ�.");
			frm.elements['email_1_'+$i].focus();
			return false;
		}

		if (email2 == "none" || email2 == "0") {
			alert("Email ������ü�� �����ϼž� �մϴ�.");
			frm.elements['email_2_'+$i].focus();
			return false;
		}

		if (email2 == "write") {
			if (email3 == "") {
				alert("Email ������ü�� �Է��ϼž� �մϴ�.");
				frm.elements['email_3_'+$i].focus();
				return false;
			}
			var b = email3.indexOf('.');
			if (b <= 0 || b == email3.length - 1) {
				alert("daum.net ���� ���·� �Է��ϼž� �մϴ�.");
				frm.elements['email_3_'+$i].focus();
				return false;
			}
			var email = email1 + "@" + email3;
			var EMAIL = /^([\w-]+(?:\.[\w-]+)*)/;

			if (!CheckType(EMAIL, email)) {
				alert("Email�� �߸��� ���ڰ� �ֽ��ϴ�.");
				frm.elements['email_3_'+$i].focus();
				return false;
			}
			var a = email.indexOf('@');
			if (a <= 0 || a == email.length - 1) {
				alert("Email ������ �߸��Ǿ����ϴ�.");
				frm.elements['email_3_'+$i].focus();
				return false;
			}
		}

		if(frm.elements['goji_9_'+$i].value == "0"){
			alert("�������� �������ּ���");
			frm.elements['goji_9_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_10_'+$i].value == "0" || frm.elements['goji_10_'+$i].value == "" ){
			alert("�������� �������ּ���");
			frm.elements['goji_10_'+$i].focus();
			return false;
		}
		if(frm.elements['tour_reason_'+$i].value == "0"){
			alert("��������� �������ּ���");
			frm.elements['tour_reason_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_7_'+$i].value == "0"){
			alert("�ⱹ���� �������ּ���");
			frm.elements['goji_7_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_7_'+$i].value == "�ⱹ��"){
			alert("�ؿ� ���� ���Խ� �����Ȯ�μ� �ۼ� �� ������ �����մϴ�. \n���� ��ȭ �Ǵ� email : travelover@travelover.co.kr ���� �ٶ��ϴ�."); 
			frm.elements['goji_7_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_8_'+$i].value == "0"){
			alert("������ �������ּ���");
			frm.elements['goji_8_'+$i].focus();
			return false;
		}

		if(frm.elements['goji_3_'+$i].value == "0"){
			alert("���� �ǰ����¸� �������ּ���");
			frm.elements['goji_3_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_4_'+$i].value == "0"){
			alert("��������ȯ ������ �������ּ���");
			frm.elements['goji_4_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_5_'+$i].value == "0"){
			alert("���Ż� ������ �������ּ���");
			frm.elements['goji_5_'+$i].focus();
			return false;
		}
		if(frm.elements['goji_6_'+$i].value == "0"){
			alert("��ɼ���� ���θ� �������ּ���");
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
//�ʱ�ȭ
$("input:radio[name=a_route]").attr("value","");
$("input:radio[name=new_select]").attr("value","");
$("input:radio[name=search_select]").attr("value","");

$("input:radio[name=a_route]").attr("disabled","");
$("input:radio[name=new_select]").attr("disabled","");
$("input:radio[name=search_select]").attr("disabled","");

}

$(document).ready(function() { // �ش� ������ Loading ��, 
	$("input[name=a_route]").click(function(){ // ������ư Ŭ�� �̺�Ʈ 
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
			// ���࿡ ���� textbox�� �����Ͱ� �Էµ� ���¿��� �׽�Ʈ1�� ���ٰ� �ٽ� ���ƿ������� ���� �ʱ�ȭ 
			$("input:radio[name=new_select]").attr("disabled",true);
			$("input:radio[name=search_select]").attr("disabled",true);
			// �׽�Ʈ1 ������ Ŭ���ϸ� ��Ȱ��ȭ 
		} 
	}); 
	$("input[name=new_select]").click(function(){ // ������ư Ŭ�� �̺�Ʈ 
		if($("input[name=new_select]:checked").val() == "1"){ 
			$("input:radio[name=search_select]").attr("disabled",false);
			} else { 
			$("input:radio[name=search_select]").attr("disabled",false);
			$("input:radio[name=search_select]").attr("disabled",true);
			// �׽�Ʈ1 ������ Ŭ���ϸ� ��Ȱ��ȭ 
		} 
	}); 
	$("input[name=search_select]").click(function(){ // ������ư Ŭ�� �̺�Ʈ 
		$('input:radio[name=new_select]:input[value=1]').attr("checked", true);
		$('input:radio[name=a_route]:input[value=1]').attr("checked", true);
	}); 
	
});

// 2017.2.10 adan �ֹι�ȣ �߰�
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
    
    document.getElementById("settle_text").innerHTML = "<img src='/main/images/check_02.png' /> ������ �Ա��ڸ�";
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
    
    document.getElementById("settle_text").innerHTML = "<img src='/main/images/check_02.png' /> ī�� ������";
  
  } 
}

function fn_chkNum() {
  if (event.keyCode < 26 || event.keyCode < 45 || event.keyCode > 57) {
     event.returnValue = false; 
     alert('���ڸ� �Է��ϼ���'); 
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
		alert('�̿����� �����ϼž� ��û�����մϴ�.');
		f.agr.focus();
		return false;
	}
	if(f.title.value == "") {
		alert('������ �Է����ּ���');
		f.title.focus();
		return false;
	}
	if(f.title.value.length > 100) {
		alert('������ 100�����Ϸ� �Է°����մϴ�.');
		f.title.focus();
		return false;
	}
	if(f.name.value == "") {
		alert('�̸��� �Է����ּ���');
		f.name.focus();
		return false;
	}
	if(f.name.value.length > 10) {
		alert('10�� ���Ϸ� �Է����ּ���');
		f.name.focus();
		return false;
	}
	if(f.email_1.value == "") {
		alert('�̸����� �Է����ּ���');
		f.email_1.focus();
		return false;
	}
	if(f.email_2.value == "0" && f.email_3.value=="") {
		alert('������ ��ü�� �������ּ���.');
		f.email_2.focus();
		return false;
	}
	if(f.tel2.value == "") {
		alert('��ȭ��ȣ�� �Է����ּ���');
		f.tel2.focus();
		return false;
	}
	if(isNaN(f.tel2.value)) {
		alert('��ȭ��ȣ�� ��Ȯ�� �Է����ּ���');
		f.tel2.focus();
		return false;
	}
	if(f.tel3.value == "") {
		alert('��ȭ��ȣ�� �Է����ּ���');
		f.tel3.focus();
		return false;
	}
	if(isNaN(f.tel3.value)) {
		alert('��ȭ��ȣ�� ��Ȯ�� �Է����ּ���');
		f.tel3.focus();
		return false;
	}
	var context = f.cont.value;

	if(context == "") {
		alert('������ �Է����ּ���');
		f.cont.focus();
		return false;
	}
	var tarea=context.replace(/</gm, "��");
	document.qna.cont.value = tarea;

	if(f.passwd.value == "") {
		alert('��й�ȣ�� �Է����ּ���');
		f.passwd.focus();
		return false;
	}
	if(f.passwd.value.length > 11) {
		alert('10�����Ϸ� �Է����ּ���');
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
				alert('�̿����� �����ϼž� �մϴ�.');
				return false;
			}
			if(f.in_ck_1.checked == false)
			{
				f.in_ck_1.focus();
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				return false;
			}
			if(f.in_ck_2.checked == false)
			{
				f.in_ck_2.focus();
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				return false;
			}
			if(f.in_ck_3.checked == false)
			{
				f.in_ck_3.focus();
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				return false;
			}
			if(f.in_ck_4.checked == false)
			{
				f.in_ck_4.focus();
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				return false;
			}
			if(f.in_ck_5.checked == false)
			{
				f.in_ck_5.focus();
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				return false;
			}
			if(f.in_ck_6.checked == false)
			{
				f.in_ck_6.focus();
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				return false;
			}
			if(f.in_ck_7.checked == false)
			{
				f.in_ck_7.focus();
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				return false;
			}
			if(f.in_ck_8.checked == false)
			{
				f.in_ck_8.focus();
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				return false;
			}
			if(f.in_ck_9.checked == false)
			{
				f.in_ck_9.focus();
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				return false;
			}
			if(f.in_ck_10.checked == false)
			{
				f.in_ck_10.focus();
				alert('�ֿ伳������ Ȯ���ϼž� ������ �� �ֽ��ϴ�.');
				return false;
			}
			if(f.agree_3.checked == false)
			{
				f.agree_3.focus();
				alert('�̿����� �����ϼž� �մϴ�.');
				return false;
			}
			if(f.agree_4.checked == false)
			{
				f.agree_4.focus();
				alert('�̿����� �����ϼž� �մϴ�.');
				return false;
			}
			if(f.agree_5.checked == false)
			{
				f.agree_5.focus();
				alert('����������ȣ��å�� �����ϼž� �մϴ�.');
				return false;
			}
			if(f.agree_6.checked == false)
			{
				f.agree_6.focus();
				alert('����������ȣ��å�� �����ϼž� �մϴ�.');
				return false;
			}	
	if(f.agr_0.value == "") {
		alert('��ü���� �Է����ּ���');
		f.agr_0.focus();
		return false;
	}
	if(f.agr_1.value == "") {
		alert('��û/����ڸ� �Է����ּ���');
		f.agr_1.focus();
		return false;
	}

	if(f.agr_3.value == "") {
		alert('��������ڸ� �Է����ּ���');
		f.agr_3.focus();
		return false;
	}
	if(f.agr_2.value == "") {
		alert('��������ڸ� �Է����ּ���');
		f.agr_2.focus();
		return false;
	}
	if(f.tel_1.value == "") {
		alert('�Ϲ���ȭ�� �Է����ּ���');
		f.tel_1.focus();
		return false;
	}
	if(isNaN(f.tel_1.value)) {
		alert('���ڸ� �Է� �����մϴ�.');
		f.tel_1.focus();
		return false;
	}
	if(f.tel_2.value == "") {
		alert('�Ϲ���ȭ�� �Է����ּ���');
		f.tel_2.focus();
		return false;
	}
	if(isNaN(f.tel_2.value)) {
		alert('���ڸ� �Է� �����մϴ�.');
		f.tel_2.focus();
		return false;
	}
	if(f.cel_1.value == "") {
		alert('�޴���ȭ�� �Է����ּ���');
		f.cel_1.focus();
		return false;
	}
	if(isNaN(f.cel_1.value)) {
		alert('���ڸ� �Է� �����մϴ�.');
		f.cel_1.focus();
		return false;
	}
	if(f.cel_2.value == "") {
		alert('�޴���ȭ�� �Է����ּ���');
		f.cel_2.focus();
		return false;
	}
	if(isNaN(f.cel_2.value)) {
		alert('���ڸ� �Է� �����մϴ�.');
		f.cel_2.focus();
		return false;
	}
	if(f.email_1.value == "") {
		alert('�̸����� �Է����ּ���');
		f.email_1.focus();
		return false;
	}
	if(f.email_2.value =="0" || f.email_2.value =="") {
		alert('������ ��ü�� �������ּ���.');
		f.email_2.focus();
		return false;
	}
	if(f.email_2.value == "write" && f.email_3.value=="") {
		alert('������ ��ü�� �Է����ּ���.');
		f.email_3.focus();
		return false;
	}
	if(f.goji_0.value =="0") {
		alert('�������� �������ּ���.');
		f.goji_0.focus();
		return false;
	}
	if(f.goji_1.value =="0") {
		alert('�������� �������ּ���.');
		f.goji_1.focus();
		return false;
	}
	var start_date = f.start_date1.value + f.start_date2.value + f.start_date3.value + f.start_date4.value;
	var end_date = f.end_date1.value + f.end_date2.value + f.end_date3.value + f.end_date4.value;
	var cur_date = new Date().getTime();
	var now = new Date(f.start_date1.value, f.start_date2.value - 1, f.start_date3.value, f.start_date4.value - 1).getTime();
	if(now < cur_date){
		alert('�������� ����ð����ķ� �����Ͻñ� �ٶ��ϴ�.');
		f.start_date1.focus();
		f.category2.options[0].selected = true;
		return false;
	}
	if(start_date >= end_date){
		alert('�Ⱓ�� ��Ȯ�� �Է��� �ֽñ� �ٶ��ϴ�.');
		f.start_date1.focus();
		f.category2.options[0].selected = true;
		return false;
	}
	if(f.total_peo.value == "") {
		alert('�ο��� �Է����ּ���');
		f.total_peo.focus();
		return false;
	}
	if(isNaN(f.total_peo.value)) {
		alert('���ڸ� �Է°����մϴ�.');
		f.total_peo.focus();
		return false;
	}
	if(f.category1.value == "0") {
		alert('��ǰ�� �������ּ���');
		f.category1.focus();
		return false;
	}else {
		var string = f.category1.options[f.category1.selectedIndex].innerHTML;
		f.category1name.value = string;
	}
	if(f.category2.value == "0") {
		alert('��ǰ�� �������ּ���');
		f.category2.focus();
		return false;
	}else {
		var string = f.category2.options[f.category2.selectedIndex].innerHTML;
		f.category2name.value = string;
	}
	if(f.plan.value == "") {
		alert('��ǰ���� �Է����ּ���');
		f.plan.focus();
		return false;
	}
	if(f.money[0].checked) {
		if(f.card_1.value =="0") {
			alert('ī��縦 �������ּ���.');
			f.card_1.focus();
			return false;
		}
		if (f.card_date1.value == "0" || f.card_date1.value == "") {
		  alert("��ȿ�Ⱓ �������ּ���");
		  f.card_date1.focus();
		  return false;
		}
		if (f.card_date2.value == "0" || f.card_date2.value == "") {
		  alert("��ȿ�Ⱓ �������ּ���");
		  f.card_date2.focus();
		  return false;
		}
		if(f.card_num1.value == "") {
			alert('ī���ȣ�� �Է����ּ���.');
			f.card_num1.focus();
			return false;
		}
		if(isNaN(f.card_num1.value)) {
			alert('���ڸ� �Է°����մϴ�.');
			f.card_num1.focus();
			return false;
		}
		if(f.card_num2.value == "") {
			alert('ī���ȣ�� �Է����ּ���.');
			f.card_num2.focus();
			return false;
		}
		if(isNaN(f.card_num2.value)) {
			alert('���ڸ� �Է°����մϴ�.');
			f.card_num2.focus();
			return false;
		}
		if(f.card_num3.value == "") {
			alert('ī���ȣ�� �Է����ּ���.');
			f.card_num3.focus();
			return false;
		}
		if(isNaN(f.card_num3.value)) {
			alert('���ڸ� �Է°����մϴ�.');
			f.card_num3.focus();
			return false;
		}
		if(f.card_num4.value == "") {
			alert('ī���ȣ�� �Է����ּ���.');
			f.card_num4.focus();
			return false;
		}
		if(isNaN(f.card_num4.value)) {
			alert('���ڸ� �Է°����մϴ�.');
			f.card_num4.focus();
			return false;
		}
		if(f.cvc.value == "") {
			alert('cvc��ȣ�� �Է����ּ���.');
			f.cvc.focus();
			return false;
		}
		if(isNaN(f.cvc.value)) {
			alert('���ڸ� �Է°����մϴ�.');
			f.cvc.focus();
			return false;
		}
		if(f.settle_name.value == "") {
			alert('ī������ָ��� �Է����ּ���.');
			f.settle_name.focus();
			return false;
		}
	}
	else if(f.money[1].checked) {
		if(f.settle_name.value =="") {
			alert('�Ա��ڸ��� �Է����ּ���.');
			f.settle_name.focus();
			return false;
		}
	}
	if(f.attache.value == "") {
		alert('������ ÷�����ּ���');
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
		alert('�̿����� �����ϼž� ��û�����մϴ�.');
		f.agr.focus();
		return false;
	}
	if(f.good[0].checked != true && f.good[1].checked != true ) {
		alert('������ �������ּ���.');
	return false;
	}
	else if(f.slc.value == "0") {
		alert('������ �������ּ���.');
	f.slc.focus();
	return false;
	}
	else if(f.when.value == "") {
		alert('�Ͻø� �Է����ּ���.');
	f.when.focus();
	return false;
	}
	else if(f.title.value == "") {
		alert('������ �Է����ּ���.');
	f.title.focus();
	return false;
	}
	else if(f.cont.value == "") {
		alert('������ �Է����ּ���.');
	f.cont.focus();
	return false;
	}
	else if(f.reply[0].checked != true && f.reply[1].checked != true ) {
		alert('�亯 ���� ���θ� �������ּ���.');
	return false;
	}
	else if(f.name.value == "") {
		alert('�̸��� �Է����ּ���.');
	f.name.focus();
	return false;
	}
	else if(f.tel.value == "") {
		alert('����ó�� �Է����ּ���.');
	f.tel.focus();
	return false;
	}
	else if(f.email.value == "") {
		alert('�̸����� �Է����ּ���.');
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
			alert ("�̸��� �Է����ּ���.");
			document.inquiry.pi_nm.focus();
			return false;

		}
	}
	if (pmonth > 12){
		alert ("�ֹι�ȣ�� ��Ȯ�� �Է����ּ���.");
		a.value ="";
		a.focus();
		return false;
	}
	if (pday > 31){
		alert ("�ֹι�ȣ�� ��Ȯ�� �Է����ּ���.");
		a.value ="";
		a.focus();
		return false;
	}

	if(a.value.length != 6 || b.value.length != 7) {
		alert ("�߸��� �ֹι�ȣ �Դϴ�.");
		a.value = "";
		b.value = "";
		a.focus();
	  return false;
	}
	if(isNaN(a.value) || isNaN(b.value)) {
		alert ("�߸��� �ֹι�ȣ �Դϴ�.");
		a.value = "";
		b.value = "";
		a.focus();
	  return false;
	}
	  if (!/[1-8]/.test(b.value.charAt(0))) {
		alert ("�߸��� �ֹι�ȣ �Դϴ�.");
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
			closeText: '�ݱ�',
			prevText: '����',
			nextText: '����',
			currentText: '����',
			monthNames: ['1��','2��','3��','4��','5��','6��','7��','8��','9��','10��','11��','12��'],
			monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
			dayNames: ['��','��','ȭ','��','��','��','��'],
			dayNamesShort: ['��','��','ȭ','��','��','��','��'],
			dayNamesMin: ['��','��','ȭ','��','��','��','��'],
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
		alert('��й�ȣ�� �Է����ּ���.');
		form.pw.focus();
		return false;
	}
}



function engChk() {
	var f = document.engForm;
	if(!f.agr.checked) {
		alert('�̿����� �����ϼž� ��û�����մϴ�.');
		f.agr.focus();
		return false;
	}
	if(f.name.value == "") {
		alert('������ �Է����ּ���');
		f.name.focus();
		return false;
	}
	if(f.jumin_1.value == "") {
		alert('�ֹι�ȣ�� �Է����ּ���');
		f.jumin_1.focus();
		return false;
	}
	if(f.jumin_1.value.length != '6') {
		alert('�ֹι�ȣ�� ��Ȯ�� �Է����ּ���');
		f.jumin_1.value ="";
		f.jumin_2.value ="";
		f.jumin_1.focus();
		return false;
	}
	if(f.jumin_2.value == "") {
		alert('�ֹι�ȣ�� �Է����ּ���');
		f.jumin_1.value ="";
		f.jumin_2.value ="";
		f.jumin_1.focus();
		return false;
	}
	if(f.jumin_2.value.length != '7') {
		alert('�ֹι�ȣ�� ��Ȯ�� �Է����ּ���');
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
		alert ("�ֹι�ȣ�� ��Ȯ�� �Է����ּ���.");
		a.value ="";
		b.value ="";
		a.focus();
		return false;
	}
	if (pday > 31){
		alert ("�ֹι�ȣ�� ��Ȯ�� �Է����ּ���.");
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
			alert ("�߸��� �ֹι�ȣ �Դϴ�.");
			a.value ="";
			b.value ="";
			a.focus();
		  return false;
		} 

		if(!(jumin2.charAt(0) == '1' || jumin2.charAt(0)  == '2' || jumin2.charAt(0) == '3' || jumin2.charAt(0) == '4'))
		{
			alert ("�߸��� �ֹι�ȣ �Դϴ�.");
			a.value ="";
			b.value ="";
			a.focus();
		  return false;
		}
	}
	if(f.tel2.value == "") {
		alert('��ȭ��ȣ�� �Է����ּ���');
		f.tel2.focus();
		return false;
	}
	if(isNaN(f.tel2.value)) {
		alert('��ȭ��ȣ�� ��Ȯ�� �Է����ּ���');
		f.tel2.value = "";
		f.tel2.focus();
		return false;
	}
	if(f.tel3.value == "") {
		alert('��ȭ��ȣ�� �Է����ּ���');
		f.tel3.focus();
		return false;
	}
	if(isNaN(f.tel3.value)) {
		alert('��ȭ��ȣ�� ��Ȯ�� �Է����ּ���');
		f.tel3.value = "";
		f.tel3.focus();
		return false;
	}
	if(f.cel2.value == "") {
		alert('��ȭ��ȣ�� �Է����ּ���');
		f.cel2.focus();
		return false;
	}
	if(isNaN(f.cel2.value)) {
		alert('��ȭ��ȣ�� ��Ȯ�� �Է����ּ���');
		f.cel2.value = "";
		f.cel2.focus();
		return false;
	}
	if(f.cel3.value == "") {
		alert('��ȭ��ȣ�� �Է����ּ���');
		f.cel3.focus();
		return false;
	}
	if(isNaN(f.cel3.value)) {
		alert('��ȭ��ȣ�� ��Ȯ�� �Է����ּ���');
		f.cel3.value = "";
		f.cel3.focus();
		return false;
	}
	var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
	if (f.email.value == "")
	{
		alert('�̸����� �Է����ּ���');
		f.email.focus();
		return false;
	}
	email = f.email.value;
	if(regex.test(email) === false) {  
		email.value == "";
		alert("�߸��� �̸��� �����Դϴ�.");  
		email.focus();
		return false;  
	}
	if(f.cont_tel.value == "") {
		alert('������ ����ó�� �Է����ּ���');
		f.cont_tel.focus();
		return false;
	}
	if(f.cont_tel.value.length > 20) {
		alert('������ ����ó�� ��Ȯ�� �Է����ּ���');
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
		alert('�̿����� �����ϼž� ��û�����մϴ�.');
		f.agr.focus();
		return false;
	}

	if(f.name.value == "") {
		alert('������ �Է����ּ���');
		f.name.focus();
		return false;
	}
	if(f.jumin_1.value == "") {
		alert('�ֹι�ȣ�� �Է����ּ���');
		f.jumin_1.focus();
		return false;
	}
	if(f.jumin_1.value.length != '6') {
		alert('�ֹι�ȣ�� ��Ȯ�� �Է����ּ���');
		f.jumin_1.value = "";
		f.jumin_2.value = "";
		f.jumin_1.focus();
		return false;
	}
	if(f.jumin_2.value == "") {
		alert('�ֹι�ȣ�� �Է����ּ���');
		f.jumin_2.focus();
		return false;
	}
	if(f.jumin_2.value.length != '7') {
		alert('�ֹι�ȣ�� ��Ȯ�� �Է����ּ���');
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
		alert ("�ֹι�ȣ�� ��Ȯ�� �Է����ּ���.");
		a.value ="";
		b.value ="";
		a.focus();
		return false;
	}
	if (pday > 31){
		alert ("�ֹι�ȣ <��> ��Ȯ�� �Է����ּ���.");
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
			alert ("�߸��� �ֹι�ȣ �Դϴ�.");
			a.value ="";
			b.value ="";
			a.focus();
		  return false;
		} 

		if(!(jumin2.charAt(0) == '1' || jumin2.charAt(0)  == '2' || jumin2.charAt(0) == '3' || jumin2.charAt(0) == '4'))
		{
			alert ("�߸��� �ֹι�ȣ �Դϴ�.");
			a.value ="";
			b.value ="";
			a.focus();
		  return false;
		}
	}
	if(f.tel2.value == "") {
		alert('��ȭ��ȣ�� �Է����ּ���');
		f.tel2.focus();
		return false;
	}
	if(isNaN(f.tel2.value)) {
		alert('��ȭ��ȣ�� ��Ȯ�� �Է����ּ���');
		f.tel2.value = "";
		f.tel2.focus();
		return false;
	}
	if(f.tel3.value == "") {
		alert('��ȭ��ȣ�� �Է����ּ���');
		f.tel3.focus();
		return false;
	}
	if(isNaN(f.tel3.value)) {
		alert('��ȭ��ȣ�� ��Ȯ�� �Է����ּ���');
		f.tel3.value = "";
		f.tel3.focus();
		return false;
	}
	if(f.cel2.value == "") {
		alert('��ȭ��ȣ�� �Է����ּ���');
		f.cel2.focus();
		return false;
	}
	if(isNaN(f.cel2.value)) {
		alert('��ȭ��ȣ�� ��Ȯ�� �Է����ּ���');
		f.cel2.value = "";
		f.cel2.focus();
		return false;
	}
	if(f.cel3.value == "") {
		alert('��ȭ��ȣ�� �Է����ּ���');
		f.cel3.focus();
		return false;
	}
	if(isNaN(f.cel3.value)) {
		alert('��ȭ��ȣ�� ��Ȯ�� �Է����ּ���');
		f.cel3.value = "";
		f.cel3.focus();
		return false;
	}
	var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
	if (f.email.value == "")
	{
		alert('�̸����� �Է����ּ���');
		f.email.focus();
		return false;
	}
	email = f.email.value;
	if(regex.test(email) === false) {  
		email.value == "";
		alert("�߸��� �̸��� �����Դϴ�.");  
		email.focus();
		return false;  
	}
	if(f.cont_tel.value == "") {
		alert('�����Ҹ� �Է����ּ���');
		f.cont_tel.focus();
		return false;
	}
}


function seach_hos() {
	var frm = document.serach_hp;
	if(frm.s_type.value == "0" || frm.s_type.value == undefined ) {
		alert('��ȸ ������ ���ùٶ��ϴ�.');
		frm.s_type.focus();
		return false;
	}
	if(frm.s_type.value == "name") {
		if(!frm.search.value) {
		alert('�������� �Է¹ٶ��ϴ�.');
		frm.search.focus();
		return false;
		}	
	}
	if(frm.s_type.value == "town") {
		if(!frm.search.value) {
		alert('�������� �Է¹ٶ��ϴ�.');
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
			alert(peo_nums+"��° ��ǰ�� ���������ּ���");
			frm.elements['prd_name_'+$i].focus();
			return false;
		}
		if(frm.elements['pre_'+$i].value == ""){
			alert(peo_nums+"��° ��ǰ�� ���������ּ���");
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
	}else if(a == "����K") {
		window.open("/join_eng/branch_index2.html?lang=kor", "_self");
	}else if(a == "����C") {
		window.open("/join_eng/branch_index2.html?lang=chn", "_self");
	}else if(a == "����E") {
		window.open("/join_eng/branch_index2.html?lang=eng", "_self");
	}else if(a == "����") {
		window.open("/insu_eng/", "_self");
	}
}




function pay_la() {
window.open ("/pay_later.html", "_target");
}


function chk_ModFrm(){
	f = document.ModForm;
	if(f.agr_1[0].checked) {
		alert('����� �����ؾ߸� ��û�����մϴ�.');
		f.agr_1[1].focus();
		return false;
	}
	if(f.app1.value =="") {
		alert('û���ȣ�� �����ּ���');
		f.app1.focus();
		return false;
	}
	if(isNaN(f.app1.value)) {
		alert('û���ȣ�� ���ڷ� �����ּ���');
		f.app1.focus();
		return false;
	}
	if(f.app2.value =="") {
		alert('û���ȣ�� �����ּ���');
		f.app2.focus();
		return false;
	}
	if(isNaN(f.app2.value)) {
		alert('û���ȣ�� ���ڷ� �����ּ���');
		f.app2.focus();
		return false;
	}
	if(f.name.value =="") {
		alert('��ü���� �����ּ���');
		f.name.focus();
		return false;
	}
	if(f.asker.value =="") {
		alert('��û�ڸ��� �����ּ���');
		f.asker.focus();
		return false;
	}
	if(f.tel1.value =="") {
		alert('�޴��� ��ȣ�� �����ּ���');
		f.tel1.focus();
		return false;
	}
	if(isNaN(f.tel1.value)) {
		alert('�޴��� ��ȣ��  ���ڷ� �����ּ���');
		f.tel1.focus();
		return false;
	}
	if(f.tel2.value =="") {
		alert('�޴��� ��ȣ��  �����ּ���');
		f.tel2.focus();
		return false;
	}
	if(isNaN(f.tel2.value)) {
		alert('�޴��� ��ȣ��  ���ڷ� �����ּ���');
		f.tel2.focus();
		return false;
	}
	if(f.tel3.value =="") {
		alert('�޴��� ��ȣ��  �����ּ���');
		f.tel3.focus();
		return false;
	}
	if(isNaN(f.tel3.value)) {
		alert('�޴��� ��ȣ��  ���ڷ� �����ּ���');
		f.tel3.focus();
		return false;
	}

	var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
	if (f.email.value == "")
	{
		alert('�̸����� �Է����ּ���');
		f.email.focus();
		return false;
	}
	email = f.email.value;
	if(regex.test(email) === false) {  
		email.value == "";
		alert("�߸��� �̸��� �����Դϴ�.");  
		email.focus();
		return false;  
	}
	var context = f.cont.value;

	if(context == "") {
		alert('������ �Է����ּ���');
		f.cont.focus();
		return false;
	}
	var tarea=context.replace(/</gm, "��");
	context = tarea;

	if(f.mod_pay.value =="0") {
		alert('���׹߻��ø�  �������ּ���');
		f.mod_pay.focus();
		return false;
	}

	var cont_pay = f.cont_pay.value;

	if(cont_pay == "") {
		alert('������ �Է����ּ���');
		f.cont_pay.focus();
		return false;
	}
	var tarea=cont_pay.replace(/</gm, "��");
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
		alert("�̸����� �Է����ּ���.");
		frm.email.focus();
		return false;
	}
	var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
	email = frm.email.value;
	if(regex.test(email) === false) {  
		email.value == "";
		alert("�߸��� �̸��� �����Դϴ�.");  
		frm.email.focus();
		return false;  
	}
	if(!frm.app_nm.value) {
		alert("��������ڸ��� �Է����ּ���.");
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
		alert('�̸��� �Է����ּ���.');
		f.nm_0.focus();
		return false;
	}
	if(!f.bday_0.value.trim()) {
		alert('������� �Է����ּ���.');
		f.bday_0.focus();
		return false;
	}
	if(!f.gender_0.value.trim()) {
		alert('������ �Է����ּ���.');
		f.gender_0.focus();
		return false;
	}
	if(f.addr1.value == "0") {
		alert('���� ���ø� �������ּ���.');
		f.addr1.focus();
		return false;	
	}
	if(!f.addr2.value.trim()) {
		alert('���� �Է����ּ���.');
		f.addr2.focus();
		return false;
	}
	var c_type = document.getElementById("con_type").innerHTML;	
	if(!f.con_type_value.value.trim()) {
		alert(c_type + '�� �Է����ּ���.');
		f.con_type_value.focus();
		return false;
	}
	if(c_type == "����") {
		var regex = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/; 
		var email = f.con_type_value.value;
		if(email.match(regex) == null) {
			alert('�߸��� �̸��� �����Դϴ�.');
			f.con_type_value.focus();
			return false;
		}
	}
	if(!$(':radio[name="con_root"]:checked').val()){
		alert("���� ��θ� �������ּ���.");
		return false;
	}
	if($(':radio[name="con_root"]:checked').val() == "��Ÿ") {
		if(!f.etc_root.value.trim()) {
			alert('��Ÿ ���� ��θ� �Է����ּ���.');
			f.etc_root.focus();
			return false;
		}
	}
f.ac.value = "SEND";
return true;
}