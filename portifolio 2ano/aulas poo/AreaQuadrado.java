class Dimensao {
    int intBase;
    int intAltura;
}

public class AreaQuadrado{
public static void main(String[] args) 
{
int intArea;
Dimensao quadrado = new Dimensao();
quadrado.intBase = 4;
quadrado.intAltura = 4;
intArea = quadrado.intBase * quadrado.intAltura;
System.out.println("Area do quadrado = "+intArea);
}
}