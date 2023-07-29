
document.getElementById("tugma").onclick = function(){
    let savol  = document.getElementById("exampleFormControlTextarea1").value;


    let true1 = savol
        .replace("oqiyman","o'qiyman")
        .replace("garoyib","g'aroyib")
        .replace("organaman","o'rganaman")
        .replace("organmoqchiman","o'rganmoqchiman")
        .replace("soz berdim","so'z berdim")
        .replace("mano","ma'no")
        .replace("kordim","ko'rdim")
        .replace("korganman","ko'rganman")
        .replace("oqishni","o'qishni")
        .replace("oqimasligim","o'qimasligim")
        .replace("ozimga","o'zimga")
        .replace("yoq","yo'q")
        .replace("oqishga","o'qishga")
        .replace("oqishni","o'qishni")
        .replace("organishni","o'rganishni")
        .replace("galaba","g'alaba")
        .replace("ganimat","g'animat")
        .replace("oqish","o'qish")
        .replace("oquv","o'quv")
        .replace("oqib","o'qib")
        .replace("bolgan","bo'lgan")
        .replace("olgan","o'lgan")
        // VILOYAT NOMLARI
        .replace("toshkent","Toshkent")
        .replace("andijon","Andijon")
        .replace("samarqand","Samarqand")
        .replace("jizzax","Jizzax")
        .replace("qoraqalpogiston","Qo'raqalpog'iston")
        .replace("nukus","Nukus")
        .replace("surxandaryo","Surxandaryo")
        // Ismlar
        .replace("anvarjon","Anvarjon")
        .replace("anvar","Anvarjon")
        .replace("Anvar","Anvarjon")
        .replace("axmadjon","Axmadjon")
        .replace("sitora","Sitoraxon")
        .replace("kamola","Kamolaxon")
        .replace("nargiza","Nargizaxon")
        //Istagancha ma'lumot qo'shish mumkin

    document.getElementById("quest1").innerHTML=`Siz yozgan matn :>> ${savol}`;
    document.getElementById("belgilar").innerHTML=`------------------------------------------------------------------------------`;
    document.getElementById("quest").innerHTML=`Men to'g'rilagan matn :>> ${true1}`;
    const sCount = true1.split(' ').length ;
    document.getElementById("words_count").innerHTML=`Siz ${sCount} ta so'z yozdingiz ishonmasangiz sanab ko'ring`



}








