
var R1 = 2;
var C1 = 2;
var R2 = 2;
var C2 = 2;
function mulMat(mat1, mat2)
{
    // To store result
    var rslt = Array(R1).fill(0).map(()=>new Array(C2).fill(0));
    console.log("Multiplication of given two matrices is:");
    var i = 0;
    var j = 0;
    var k = 0;
    for (i = 0; i < R1; i++)
    {
        for (j = 0; j < C2; j++)
        {
            rslt[i][j] = 0;
            for (k = 0; k < R2; k++)
            {
                rslt[i][j] += mat1[i][k] * mat2[k][j];
            }
            console.log(rslt[i][j] + " ");
        }
        console.log("");
    }
}

var mat1 = [[1, 1], [2, 2]];
var mat2 = [[1, 1], [2, 2]];

if (C1 != R2)
{
    console.log("The number of columns in Matrix-1 must be equal to the number of rows in Matrix-2");
    console.log("Please update the global variables according to your array dimension");
}
else
{
    mulMat(mat1, mat2);
}