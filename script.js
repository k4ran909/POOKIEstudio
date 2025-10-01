function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./asset/male0001.png
     ./asset/male0002.png
     ./asset/male0003.png
     ./asset/male0004.png
     ./asset/male0005.png
     ./asset/male0006.png
     ./asset/male0007.png
     ./asset/male0008.png
     ./asset/male0009.png
     ./asset/male0010.png
     ./asset/male0011.png
     ./asset/male0012.png
     ./asset/male0013.png
     ./asset/male0014.png
     ./asset/male0015.png
     ./asset/male0016.png
     ./asset/male0017.png
     ./asset/male0018.png
     ./asset/male0019.png
     ./asset/male0020.png
     ./asset/male0021.png
     ./asset/male0022.png
     ./asset/male0023.png
     ./asset/male0024.png
     ./asset/male0025.png
     ./asset/male0026.png
     ./asset/male0027.png
     ./asset/male0028.png
     ./asset/male0029.png
     ./asset/male0030.png
     ./asset/male0031.png
     ./asset/male0032.png
     ./asset/male0033.png
     ./asset/male0034.png
     ./asset/male0035.png
     ./asset/male0036.png
     ./asset/male0037.png
     ./asset/male0038.png
     ./asset/male0039.png
     ./asset/male0040.png
     ./asset/male0041.png
     ./asset/male0042.png
     ./asset/male0043.png
     ./asset/male0044.png
     ./asset/male0045.png
     ./asset/male0046.png
     ./asset/male0047.png
     ./asset/male0048.png
     ./asset/male0049.png
     ./asset/male0050.png
     ./asset/male0051.png
     ./asset/male0052.png
     ./asset/male0053.png
     ./asset/male0054.png
     ./asset/male0055.png
     ./asset/male0056.png
     ./asset/male0057.png
     ./asset/male0058.png
     ./asset/male0059.png
     ./asset/male0060.png
     ./asset/male0061.png
     ./asset/male0062.png
     ./asset/male0063.png
     ./asset/male0064.png
     ./asset/male0065.png
     ./asset/male0066.png
     ./asset/male0067.png
     ./asset/male0068.png
     ./asset/male0069.png
     ./asset/male0070.png
     ./asset/male0071.png
     ./asset/male0072.png
     ./asset/male0073.png
     ./asset/male0074.png
     ./asset/male0075.png
     ./asset/male0076.png
     ./asset/male0077.png
     ./asset/male0078.png
     ./asset/male0079.png
     ./asset/male0080.png
     ./asset/male0081.png
     ./asset/male0082.png
     ./asset/male0083.png
     ./asset/male0084.png
     ./asset/male0085.png
     ./asset/male0086.png
     ./asset/male0087.png
     ./asset/male0088.png
     ./asset/male0089.png
     ./asset/male0090.png
     ./asset/male0091.png
     ./asset/male0092.png
     ./asset/male0093.png
     ./asset/male0094.png
     ./asset/male0095.png
     ./asset/male0096.png
     ./asset/male0097.png
     ./asset/male0098.png
     ./asset/male0099.png
     ./asset/male0100.png
     ./asset/male0101.png
     ./asset/male0102.png
     ./asset/male0103.png
     ./asset/male0104.png
     ./asset/male0105.png
     ./asset/male0106.png
     ./asset/male0107.png
     ./asset/male0108.png
     ./asset/male0109.png
     ./asset/male0110.png
     ./asset/male0111.png
     ./asset/male0112.png
     ./asset/male0113.png
     ./asset/male0114.png
     ./asset/male0115.png
     ./asset/male0116.png
     ./asset/male0117.png
     ./asset/male0118.png
     ./asset/male0119.png
     ./asset/male0120.png
     ./asset/male0121.png
     ./asset/male0122.png
     ./asset/male0123.png
     ./asset/male0124.png
     ./asset/male0125.png
     ./asset/male0126.png
     ./asset/male0127.png
     ./asset/male0128.png
     ./asset/male0129.png
     ./asset/male0130.png
     ./asset/male0131.png
     ./asset/male0132.png
     ./asset/male0133.png
     ./asset/male0134.png
     ./asset/male0135.png
     ./asset/male0136.png
     ./asset/male0137.png
     ./asset/male0138.png
     ./asset/male0139.png
     ./asset/male0140.png
     ./asset/male0141.png
     ./asset/male0142.png
     ./asset/male0143.png
     ./asset/male0144.png
     ./asset/male0145.png
     ./asset/male0146.png
     ./asset/male0147.png
     ./asset/male0148.png
     ./asset/male0149.png
     ./asset/male0150.png
     ./asset/male0151.png
     ./asset/male0152.png
     ./asset/male0153.png
     ./asset/male0154.png
     ./asset/male0155.png
     ./asset/male0156.png
     ./asset/male0157.png
     ./asset/male0158.png
     ./asset/male0159.png
     ./asset/male0160.png
     ./asset/male0161.png
     ./asset/male0162.png
     ./asset/male0163.png
     ./asset/male0164.png
     ./asset/male0165.png
     ./asset/male0166.png
     ./asset/male0167.png
     ./asset/male0168.png
     ./asset/male0169.png
     ./asset/male0170.png
     ./asset/male0171.png
     ./asset/male0172.png
     ./asset/male0173.png
     ./asset/male0174.png
     ./asset/male0175.png
     ./asset/male0176.png
     ./asset/male0177.png
     ./asset/male0178.png
     ./asset/male0179.png
     ./asset/male0180.png
     ./asset/male0181.png
     ./asset/male0182.png
     ./asset/male0183.png
     ./asset/male0184.png
     ./asset/male0185.png
     ./asset/male0186.png
     ./asset/male0187.png
     ./asset/male0188.png
     ./asset/male0189.png
     ./asset/male0190.png
     ./asset/male0191.png
     ./asset/male0192.png
     ./asset/male0193.png
     ./asset/male0194.png
     ./asset/male0195.png
     ./asset/male0196.png
     ./asset/male0197.png
     ./asset/male0198.png
     ./asset/male0199.png
     ./asset/male0200.png
     ./asset/male0201.png
     ./asset/male0202.png
     ./asset/male0203.png
     ./asset/male0204.png
     ./asset/male0205.png
     ./asset/male0206.png
     ./asset/male0207.png
     ./asset/male0208.png
     ./asset/male0209.png
     ./asset/male0210.png
     ./asset/male0211.png
     ./asset/male0212.png
     ./asset/male0213.png
     ./asset/male0214.png
     ./asset/male0215.png
     ./asset/male0216.png
     ./asset/male0217.png
     ./asset/male0218.png
     ./asset/male0219.png
     ./asset/male0220.png
     ./asset/male0221.png
     ./asset/male0222.png
     ./asset/male0223.png
     ./asset/male0224.png
     ./asset/male0225.png
     ./asset/male0226.png
     ./asset/male0227.png
     ./asset/male0228.png
     ./asset/male0229.png
     ./asset/male0230.png
     ./asset/male0231.png
     ./asset/male0232.png
     ./asset/male0233.png
     ./asset/male0234.png
     ./asset/male0235.png
     ./asset/male0236.png
     ./asset/male0237.png
     ./asset/male0238.png
     ./asset/male0239.png
     ./asset/male0240.png
     ./asset/male0241.png
     ./asset/male0242.png
     ./asset/male0243.png
     ./asset/male0244.png
     ./asset/male0245.png
     ./asset/male0246.png
     ./asset/male0247.png
     ./asset/male0248.png
     ./asset/male0249.png
     ./asset/male0250.png
     ./asset/male0251.png
     ./asset/male0252.png
     ./asset/male0253.png
     ./asset/male0254.png
     ./asset/male0255.png
     ./asset/male0256.png
     ./asset/male0257.png
     ./asset/male0258.png
     ./asset/male0259.png
     ./asset/male0260.png
     ./asset/male0261.png
     ./asset/male0262.png
     ./asset/male0263.png
     ./asset/male0264.png
     ./asset/male0265.png
     ./asset/male0266.png
     ./asset/male0267.png
     ./asset/male0268.png
     ./asset/male0269.png
     ./asset/male0270.png
     ./asset/male0271.png
     ./asset/male0272.png
     ./asset/male0273.png
     ./asset/male0274.png
     ./asset/male0275.png
     ./asset/male0276.png
     ./asset/male0277.png
     ./asset/male0278.png
     ./asset/male0279.png
     ./asset/male0280.png
     ./asset/male0281.png
     ./asset/male0282.png
     ./asset/male0283.png
     ./asset/male0284.png
     ./asset/male0285.png
     ./asset/male0286.png
     ./asset/male0287.png
     ./asset/male0288.png
     ./asset/male0289.png
     ./asset/male0290.png
     ./asset/male0291.png
     ./asset/male0292.png
     ./asset/male0293.png
     ./asset/male0294.png
     ./asset/male0295.png
     ./asset/male0296.png
     ./asset/male0297.png
     ./asset/male0298.png
     ./asset/male0299.png
     ./asset/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

images[0].onload = render;

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})