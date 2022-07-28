function showHjosaMobile(vJiwonNm, vSaNo, vMaemulSer, vMGakMulMseoYN, vCorCanGbncd) {
    document.getElementById("hJiwonNm").value = vJiwonNm;
    document.getElementById("hSaNo").value = vSaNo;
    document.getElementById("hOrgSaNo").value = vSaNo;
    document.getElementById("hMaemulSer").value = vMaemulSer;
    document.getElementById("hMGakMulMseoYN").value = vMGakMulMseoYN;

    if (vCorCanGbncd != null && vCorCanGbncd != "") {
        document.getElementById("hCorCanYN").value = "Y";
    }
    else {
        document.getElementById("hCorCanYN").value = "N";
    }

    // porActSubmit(document.hform, "RetrieveMobileEstSaHjosa.laf", "", "PMB101003");
}
