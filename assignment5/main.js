

function postFunction()
{
    var text = document.getElementById("text1").value;
    var topic = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");

    if(text == null)
    {
        alert("พิมพ์ก่อนพี่ อย่ารีบ!")
    }

    if (topic.innerHTML == "")
    {
        topic.innerHTML = text;
    }
    else if (comment1.innerHTML == "")
    {
        if (text == "isus")
        {
            comment1.innerHTML = "น้าค่อมหรอมึง?";
        }
        else
        {
            comment1.innerHTML = text;
        }
        
    }
    else if (comment2.innerHTML == "")
    {
        comment2.innerHTML = text;
    }
    
}

function clearFunction()
{
    var text = document.getElementById("text1").value;
    var topic = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");
    test = null;
    topic.innerHTML = null;
    comment1.innerHTML = null;
    comment2.innerHTML = null;
}