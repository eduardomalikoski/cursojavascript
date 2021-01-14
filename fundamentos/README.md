AND
v && v -> v
v && f -> f
f && f -> f
f && ? -> f

OR
v || v -> v
v || f -> v
f || f -> f
v || ? -> v
f || ? -> f

XOR
v xor v -> f
v xor f -> v
v xor v -> v
f xor f -> f

NOT
!v -> f
!f -> v