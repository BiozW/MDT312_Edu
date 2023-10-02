window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
    form.onreset = reform;
}

function validateForm() {
    var a = document.forms["myForm"]["password"][0];
    var b = document.forms["myForm"]["password"][1];

    if (a.value == b.value)
    {
    }
    else
    {
        alert("กรอกไม่ถูกเว้ย");
        document.getElementById('errormsg').innerHTML = "รหัสไม่ตรงโว้ยยยย";
        return false;
    }

    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

function reform(){
    document.getElementById("myForm") = null;
}