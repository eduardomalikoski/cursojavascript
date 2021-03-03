CSS - Cascading Style Sheets (folhas de estilo em cascata)

Padrão de nomenclatura dash-case ou camelCase

Entre um link stylesheet e um style será seguido a ordem de processamento. Ex:
<!-- <link rel="stylesheet" href="css/externo.css">
    <style>
        body {
            background-color: rebeccapurple;
        }
</style> -->
Será mantido o style e não o link por conta da ordem.
Porém o style inline vai ter ordem de prioridade não importando a ordem dos outros, mas não é uma boa prática
<!-- 
<body style="background-color: sienna;">
    <h1>E agora?</h1>
</body> -->


Unidades

Absolutos:
- px
- cm
- mm

ViewPort:           Font:
- vh               - rem
- vw               - em
- vmin              .
- vmax              .
    |               |
    - - - > % < - - -
            |
            - - > caso especial