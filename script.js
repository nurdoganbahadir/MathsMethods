let number = 128.75;

//! .toFixed() sayının noktadan sonrasını atar ve büyük olan kısma sayıyı yuvarlar. İçine değer alırsa noktadan sonrası kadar uzatır
console.log(number.toFixed(1));

//! .round() sayıyı normal şekilde yakın kısma yuvalar
console.log(Math.round(number));

//! .pow() içine aldığı değerlerin kuvvetini döndürür
console.log(Math.pow(2, 3));

//! .sqrt() girilen sayının kökünü bulur
console.log(Math.sqrt(49));

//! .abs() mutlak değer döndürür
console.log(Math.abs(-20));

//! .ceil() nokadan sonrası kaldırır ve yukarı yuvarlar
console.log(Math.ceil(number));

//! .floor() yukarı yakın olsada aşağı yuvarlar
console.log(Math.floor(number));

//! .min() .max() içine aldıkları değerleri karşılaştırır
console.log(Math.max(5,9,11))