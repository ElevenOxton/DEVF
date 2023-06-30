const x= 9;


function scopelocal(params) {
    const x=100
    console.log(x);
}

scopelocal();
console.log(x);