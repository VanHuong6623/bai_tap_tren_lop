function tinhTien(){
    var thuNhap = document.getElementById("thu_Nhap").value;
    var tienVay = document.getElementById("tien_Vay").value;
    var laiMotNam = document.getElementById("lai_Mot_Nam").value;
    var thoiGianVay = document.getElementById("thoi_Gian_Vay").value;

    thuNhapNumber = Number ("thuNhap");
    tienVayNumber = Number ("tienVay");
    laiMotNamNumber = Number ("laiMotNam");
    thoiGianVayNumber = Number ("thoiGianVay");

//tính

var soTienCoTheTraTrongMotThang = (thuNhapNumber*0.6);
var soTienTraTrongMotThang =(tienVayNumber*(1+(laiMotNamNumber/12)))/thoiGianVayNumber;
var dieuKienTag = document.getElementById("duDieuKien");


if(soTienCoTheTraTrongMotThang > soTienTraTrongMotThang){
    dieuKienTag.textContent="Đủ điều kiện";
}else{
    dieuKienTag.textContent="Không đủ điều kiện";
}

}
function reset(){
    document.getElementById("thu_Nhap").value=" ";
    document.getElementById("tien_Vay").value=" ";
    document.getElementById("lai_Mot_Nam").value=" ";
    document.getElementById("thoi_Gian_Vay").value=" ";
    document.getElementById("dieuKienTag").style.display="none";
  
    }
    