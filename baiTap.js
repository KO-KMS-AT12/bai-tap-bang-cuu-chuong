function bangCuuChuong() {
    document.write("<table border=1 cellspacing='0' cellpadding='10' style='height: 300px; width:100%;text-align: center'>")
    for (i = 1; i <= 9; i++) {
        document.write("<tr>")
        for (n = 1; n <= 9; n++)
            document.write("<td>" + n + "x" + i + "=" + (n * i));
        document.write("</td>");
        document.write("</tr>")
    }
    document.write("</tr></table>")
}

bangCuuChuong();





