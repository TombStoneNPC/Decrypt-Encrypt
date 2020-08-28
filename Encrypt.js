function main() {
    var parola, n;
    var v, x, c, f;
    var k;
    
    window.alert("Scrivi una chiave");
    k = window.prompt('Enter a value for k');
    window.alert("Scrivi una parola");
    parola = window.prompt('Enter a value for parola');
    v = parola.length();
    for (x = 0; x <= v - 1; x++) {
        n = parola.charAt(x);
        window.alert(parola.charAt(x));
        window.alert(" = ");
        window.alert(String.CharCodeAt(n));
        window.alert(" + ");
        window.alert(k);
        window.alert(" = ");
        f = String.CharCodeAt(n);
        c = f + k;
        window.alert(c);
        window.alert(" = ");
        window.alert(String.fromCharCode(c));
    }
}
