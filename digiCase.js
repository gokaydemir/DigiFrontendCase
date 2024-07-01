let title = "Everyday tops, we have something to suit every occasion.";
let subTitle = "At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sittincidunt semper eu proin leo gravida cursus.";
let link = "Shop All Everyday Items";
let bannerImage = "https://s3-alpha-sig.figma.com/img/1908/456b/d2372799dcccb5c92850921aa7b1c9f5?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvDBZkNJtuBL-WzbKGGfVl23KIF9jMo39UtwFq-hYUiOR1257QhvY-ziJkBrbiqQiBx1xeyz9KN4UlmsjW5k0pbneqZ6iAqUthjP0EFYsvJ~49BswqxwCHWlEQhD9IpCkq3jEWu9rejV~KCGnp9-taOBeT5sauiXXj3vozPpkdBIf0EMsoulvA~LxK2IUwAFvOv6Ad1TWzG0ainMVjptVj6vALaAe~dGf-SlFzJT2Bhh4t~U4aS42z5LadHk--oet9dp6t9cmAFNsoEyqQAO69XkIHGhiSaIald2hNYK-0o~V~qOKPmE8QfWIm7KoZ447evxzlfoe5H1At14WVWNew__";

let stateCheck = setInterval(() => {

    /* Sayfa yüklenirse Intervali silme işlemi  */
    if (document.readyState === "complete" || document.readyState === "interactive") {
        clearInterval(stateCheck);
        try {
            /* Mobil ve Web ayırmak için kullandığım Mobil fonksiyonu */
            window.mobileCheck = function () {
                let check = false;
                (function (a) {
                    if (
                        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                            a
                        ) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                            a.substr(0, 4)
                        )
                    )
                        check = true;
                })(navigator.userAgent || navigator.vendor || window.opera);
                return check;
            };
            /* Ürün Listesi */
            let productInfo = [
                {
                    name: "365 Signature Hoodie",
                    price: "€35.95",
                    image: "https://s3-alpha-sig.figma.com/img/4c14/b9ce/9692c3a76ffd5b1fd6c0780fdb427eae?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A-Xh8EeGg-6IIWSUWRnjkqH399M4XmSDGGtugW0sLYmfonraRb-oku77NLU2q1uUBdENa8iPZ9oC8mjBICp~0Rks4s2rLmR-Pt8IMzam3bjw0l7KhYBkCWoNjtX24S2Uv6-o4K9QVdQ5ctxFCmcEfA6Q4lHqgg0nfztZxbBkhNIP8agi8ra25QNNHh4ScEjkxsKcMBMbw6ebyDeyJPwjIStk4YT3GycuDW1zZtUXaiRO37rvv4rwstrD30OmGdY~WolMFkbYI30KjThaN-ZDXRbfOJUijZqFrPn6XO2F5kxo7bvrVV3MzDTWcz72-ZYCODshaJzOt71TjtDGpGNwIA__",
                },
                {
                    name: "Organic Skinny High Waist Jeans",
                    price: "€35.95",
                    image: "https://s3-alpha-sig.figma.com/img/c6d3/5d1f/d8ba079009582b2d60a96de5d21d70f2?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zx0c3oezSe3stl0pd8L3R2B5OX4ehInTLtXGArpPEUQ9MvmQztVYpSLVjcd-j4iCWLH8SIegTmBx3NyER74CZcSXX7vpRbVXBbWzCzoDTKjZTKs1qAtN7eRi~sQtStbLVpqnadESy3y31-Uwpx5srFTp3l0FC6DSAmwmnlAAWESNC9LgL6D7khV6MotbH5qDEvFUSzVF9NVlIQbVvo3RIKdMK4iFcp5QI007sPCwRgknxPiO0pJ0A~tnSDqTVXvsNMd6rs~xnU1L0dZeV5aFXv0Z6ZbJAa-HIuBMQ~0ZvL7srFz2DrLhKAE~2jtq2PmxlEzvooKBuqqR5GkajfB9~w__",
                },
                {
                    name: "Organic Skinny High Waist Jeans",
                    price: "€35.95",
                    image: "https://s3-alpha-sig.figma.com/img/b8c8/817c/d072de9a81b44b5009756a14031c4770?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQBH~KUrdvOYFOsZW2hPMf-iQYAe~~mfwwJeM7eeMt6oWtPAvCXcbNqWwaF6HvcVVpZYEjuFl-yP2t6~5~XGq17XZRN0-MYozDGZtz476ojtHtjt9cZ-hbhrIba0SKeKXdvg8sJMG~gUCVf5lt9nH5jxFlMKhnp2PLkZ8mnT4BFaY582cX28Yf78kFoi48cXtmB~05Ef3wZuV2kh7vqvwrJYxpPEG~8hgjq63N5MQn2ahLIR09CHss-yAbTmEV0-owlYHu~A2q~8BQxpeOf3OhW1NWtr7mjsEQlgo~QcxNm-hngQn9l9Xt-bG4LjKCLuErS5ZoPgSYs5hUIfZaQB1A__",
                }
            ];

            let difiDiv = document.createElement('div');
            let difiStyle = document.createElement('style');
            difiDiv.classList.add('dfContainer');

            /* Desktop */
            if (!mobileCheck()) {
                difiDiv.innerHTML = `<div class="content dfImage"> <img src=${bannerImage} /> </div> <div class="content product"> <div class="dfProductInfo"> <div class="dfTitle">${title}</div> <div class="dfsubTitle">${subTitle}</div> <div class="dfLink">${link}</div> </div> <div class="df-slider-container"> <div class="dfSlider"> ${productInfo.map(product => ` <div class="dfItem"> <img src="${product.image}" /> <div class="dfProductName">${product.name}</div> <div class="dfItemDetails"> <div class="dfProductPrice">${product.price}</div> <div class="dfProductColor"> <div class="dfcolor first active"></div> <div class="dfcolor second"></div> <div class="dfcolor third"></div> <div class="dfcolor fourth"></div> </div> </div> </div> `).join('')} </div> </div> </div>`;
                difiStyle.innerHTML = `.dfContainer { display: flex; width: 1440px; height: 864px; gap: 80px; margin: auto; } .content { display: flex; flex-direction: column; justify-content: center; gap: 12px; opacity: 1; } .content.dfImage { width: 730px; height: 864px; } .content.product { width: 720px; height: 850px; } .content img { width: 100%; height: 100%; object-fit: cover; } .dfTitle { font-family: system-ui; font-size: 31.25px; font-weight: 700; line-height: 40.62px; text-align: left; color: #000000; width: 491px; height: 135px; } .dfsubTitle { font-family: Avenir; font-size: 16px; font-weight: 400; line-height: 25.6px; text-align: left; color: #666666; width: 401px; height: 78px; } .dfLink { font-family: Avenir; font-size: 12.8px; font-weight: 900; line-height: 17.48px; text-align: left; width: 138px; height: 17px; border-bottom: 1px solid black; cursor: pointer; } .dfItem { height: 363px; gap: 0px; opacity: 0px; } .dfItem img { width: 230px; height: 310px; gap: 0px; } .df-slider-container { width: 720px; height: 363px; } .slick-slide { display: flex; justify-content: center; } .slick-next:before, .slick-prev:before { color: #000 !important; } .dfProductName { color: #000; font-family: system-ui; font-size: 12.8px; font-weight: 400; line-height: 20.48px; text-align: left; width: 230px; height: 26px; } .dfProductPrice { color: #000; width: 40px; height: 20px; font-weight: 600; font-size: 13px; font-family: sans-serif; } .dfItemDetails { display: flex; width: 230px; justify-content: space-between; } .dfProductColor { display: flex; } .dfcolor { padding: 5px; border-radius: 14px; margin: 4px; height: 0px; } .first { background-color: #99c3cc; border: 1px solid #99c3cc; } .second { background-color: #cc9999; border: 1px solid #cc9999; } .third { background-color: #cb99cc; border: 1px solid #cb99cc; } .fourth { background-color: #a6cc99; border: 1px solid #a6cc99; } .active { border: 1px solid #000; }`;
            }

            /* Mobile */
            else if (mobileCheck()) {
                difiDiv.innerHTML = `<div class="content dfImage"> <img src=${bannerImage} /> </div> <div class="content product"> <div class="dfProductInfo"> <div class="dfTitle">${title}</div> <div class="dfLink">${link}</div> </div> <div class="df-slider-container"> <div class="dfSlider"> ${productInfo.map(product => ` <div class="dfItem"> <img src="${product.image}" /> <div class="dfProductName">${product.name}</div> <div class="dfItemDetails"> <div class="dfProductPrice">${product.price}</div> <div class="dfProductColor"> <div class="dfcolor first active"></div> <div class="dfcolor second"></div> <div class="dfcolor third"></div> <div class="dfcolor fourth"></div> </div> </div> </div> `).join('')} </div> </div> </div> `;
                difiStyle.innerHTML = `body{ margin:0px} .dfContainer { width: 1440px; height: 864px; gap: 80px; margin: auto; } .content { } .content.dfImage { position: relative; width: 434px; height: 542px; } .content.product { width: auto; height: auto; position: absolute; top: 300px; left:20px; } .dfProductInfo{ height:164px; } .content img { width: 100%; height: 100%; object-fit: cover; } .dfTitle { color: #ffffff; font-family: sans-serif; font-size: 23px; font-weight: 700; line-height: 26px; text-align: left; width: 312px; height: 112px; } .dfLink { color: #ffffffff; width: 155px; height: 17px; border-bottom: 1px solid #ffffff; cursor: pointer; font-family: sans-serif; font-size: 12.8px; font-weight: 600; line-height: 17.48px; text-align: left; } .dfItem { height: 363px; gap: 0px; opacity: 0px; } .dfItem img { width: 157px; height: 226px; } .df-slider-container { width: 450px; height: 363px; } .slick-slide { display: flex; justify-content: center; } .slick-next, .slick-prev{ display:none; } .dfProductName { color: #000; font-family: system-ui; font-size: 12.8px; font-weight: 400; line-height: 19.48px; text-align: left; width: 149px; height: 40px; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; -webkit-line-clamp: 2; } .dfProductPrice { width: 40px; height: 20px; font-family: sans-serif; font-size: 12.8px; font-weight: 500; line-height: 20.48px; text-align: center; } .dfItemDetails { width: 230px; } .dfProductColor { display: flex; } .dfcolor { padding: 5px; border-radius: 14px; margin: 4px; height: 0px; } .first { background-color: #99c3cc; border: 1px solid #99c3cc; } .second { background-color: #cc9999; border: 1px solid #cc9999; } .third { background-color: #cb99cc; border: 1px solid #cb99cc; } .fourth { background-color: #a6cc99; border: 1px solid #a6cc99; } .active { border: 1px solid #000; } `;
            }


            document.head.appendChild(difiStyle);
            document.body.appendChild(difiDiv);

            /* Slider olarak Slick kütüphanesi tercih ettim */
            $(document).ready(function () {
                $(".dfSlider").slick({
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    autoplay: false,
                    infinite: false,
                    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">Next</button>',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ],
                });
            });

        } catch (error) {
            window["personaclickErrorMessage"] && window["personaclickErrorMessage"](document.location.href, error);
            throw (error);
        }
    }
}, 100);
