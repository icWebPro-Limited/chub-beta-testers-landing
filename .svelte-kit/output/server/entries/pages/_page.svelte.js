import { c as create_ssr_component, d as add_attribute, i as escape, v as validate_component } from "../../chunks/ssr.js";
import { C as ChubLogo$1 } from "../../chunks/wLogo_white.js";
const ArrowMenu2 = "data:image/svg+xml,%3csvg%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.7523%2011.5172L13.7523%206.45885L8.69398%206.45885'%20stroke='%231E0221'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.2103%2010.0001L13.6812%206.5293'%20stroke='%231E0221'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.66963%2013.5418L8.55713%2011.6543'%20stroke='%231E0221'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const ChubLogo = "/v2/_app/immutable/assets/chub_logo_main.FQBe6gmu.png";
const bLaptopHold = "/v2/_app/immutable/assets/bLaptopHold.Nc72HcGi.png";
const CombinedFaces = "/v2/_app/immutable/assets/pexels-cottonbro-48816191.ifFMBvGU.png";
const Frame1000011791 = "/v2/_app/immutable/assets/Frame1000011791.MQs3kzk1.png";
const Frame1000011803 = "/v2/_app/immutable/assets/Frame1000011803.DUaxlcKq.png";
const Frame1000011802 = "data:image/png;base64,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";
const Frame1000011801 = "data:image/png;base64,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";
const DiscussionImg = "/v2/_app/immutable/assets/Feedback-2.Xzm77eSK.png";
const Design04 = "/v2/_app/immutable/assets/Design04.G8BoYT-X.png";
const Design4 = "/v2/_app/immutable/assets/Design4.HpQmKoAy.png";
const iphoneMeta = "/v2/_app/immutable/assets/iphoneMeta.AsQ6Vago.png";
const Frame1000011826 = "/v2/_app/immutable/assets/Frame1000011826.Ops4a05q.png";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let emailaddress = "";
  let fullname = "";
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  return `<main class="block pb-0 lg:mt-[0px] w-full"> <section id="title" class="max-md:mx-[0px] p-7 grid grid-cols-1 bg-[#690571]"> <div class="flex justify-center"><div class="header-new flex justify-between mt-40 bg-[#690571] max-md:hidden">  <img class="my-[24px] ml-[80px] bg-transparent "${add_attribute("src", ChubLogo, 0)} alt="CHUB logo"> <nav class="bg-transparent flex gap-20 my-[40px] self-center" data-svelte-h="svelte-1gugct"><a class="nav-links" href="/">Home</a> <a class="nav-links flex gap-1" href="/about-us">Why CHUB <img class="w-[20px]"${add_attribute("src", ArrowMenu2, 0)}></a> <a class="nav-links flex gap-1" href="/suggestions">Suggest a feature <img class="w-[20px]"${add_attribute("src", ArrowMenu2, 0)}></a></nav> <button class="buttons header-button my-[14px] mr-[16px] self-center duration-200" data-svelte-h="svelte-14ga089">Join the Waitlist today!</button></div></div> <div class="justify-center mb-4 flex max-md:w-[full] lg:hidden" data-svelte-h="svelte-6jf6g"><img${add_attribute("src", ChubLogo$1, 0)} alt="" class="w-[250px]"></div>  <div class="z-10 flex justify-center flex-col text-center" data-svelte-h="svelte-di77yk"><h1 id="waitlist-form-header" class="max-md:text-[25px] max-md:leading-[1.2] text-[70px] mt-[120px] max-md:mt-[30px] font-[900] leading-[100px] text-center dela-gothic-one-regular">Get productive while having fun!</h1> <p class="lg:hidden text-center mt-4 font-[100] text-[17px]">Get Productive while having fun! Join thousands of other people on various challenges and create unique challenges with your circle.</p> <p class="max-md:hidden text-center mt-1 lg:mt-1 font-[100] text-[30px]">Get Productive while having fun! Join thousands of other people on <br> various challenges and create unique challenges with your circle.</p></div>   <div class="z-20 max-md:grid max-md:mt-8 flex flex-col justify-center max-md:gap-4 gap-10 mt-[40px]"> <div id="waitlist-form" class="flex justify-center"><form id="waitlist-form" action="block" method="POST" class="mb-[150px]"><div class="flex flex-row w-[100%] justify-center gap-8"><input type="text" minlength="3" maxlength="100" name="fullname" id="fullname" class="waitlist-input-left" placeholder="Enter your Name" required${add_attribute("value", fullname, 0)}> <input type="email" minlength="3" maxlength="100" name="emailaddress" id="emailaddress" class="waitlist-input-right" placeholder="Enter your email address" required${add_attribute("value", emailaddress, 0)}></div> <div class="grid justify-center mt-5" data-svelte-h="svelte-1pbxnxz"><div class="flex flex-row gap-5 leading-4 mt-5"><input id="checkbox1" class="custom-checkbox" name="checkbox1" type="checkbox" required> <label for="checkbox1" class="text-[20px]">I consent to receiving communications from CHUB</label></div> <div class="flex flex-row gap-5 leading-4 mt-5"><input id="checkbox2" class="w-[auto]" name="checkbox2" type="checkbox" required> <label for="checkbox2" class="text-[20px]">I would like to be a part of the CHUB testing.</label></div></div> <div class="flex justify-center mt-10" data-svelte-h="svelte-1lgozyj"><button class="join-button1 max-md:h-[50px] max-md:w-[250px] h-[60px] w-[280px] flex justify-center items-center font-[100]">Join the Waitlist Today!</button></div></form></div></div></section>  <section class="mid-section-grade max-md:mt-[20px] max-md:mb-[20px] pb-[150px]"><img${add_attribute("src", bLaptopHold, 0)} alt="chub-playground" class="chub-playground w-[700px] absolute mt-[-700px] max-md:w-full"> <div class="flex justify-center mt-[60px] mx-[40px] gap-20"><div class="flex flex-col justify-end items-end"><div class="w-full flex flex-col justify-enf items-end"><div class="py-5 w-full max-w-md mx-auto"><div class="text-black text-left my-5 lg:mt-1 font-[500] text-[40px] w-full" data-svelte-h="svelte-1pnklvt">Grow, Build Community, and  have fun while at it!</div>  <div class="${"rounded-lg mb-4 " + escape(
    "inactive-accord",
    true
  )}">  <div class="${"flex justify-left items-left py-4 pr-20 pl-3 gap-3 cursor-pointer " + escape(
    "inactive-accord",
    true
  ) + " hover:bg-purple-300 rounded-lg"}"><span class="text-[20px] bg-[#690571] py-0 px-[10px] rounded-full">${escape("+")}</span> <span class="text-lg text-[#690571] font-[900]" data-svelte-h="svelte-ydvegi">Create your community:</span></div> ${``}</div>    <div class="${"rounded-lg mb-4 " + escape(
    "inactive-accord",
    true
  )}"><div class="${"flex justify-left items-center p-4 gap-3 cursor-pointer " + escape(
    "inactive-accord",
    true
  ) + " hover:bg-purple-300 rounded-lg"}"><span class="text-[20px] bg-[#690571] py-0 px-[10px] rounded-full">${escape("+")}</span> <span class="text-lg text-[#690571] font-[900]" data-svelte-h="svelte-1xcl1m9">Set up challenges</span></div> ${``}</div>    <div class="${"rounded-lg mb-4 " + escape(
    "inactive-accord",
    true
  )}"><div class="${"flex justify-left items-center p-4 gap-3 cursor-pointer " + escape(
    "inactive-accord",
    true
  ) + " hover:bg-purple-300 rounded-lg"}"><span class="text-[20px] bg-[#690571] py-0 px-[10px] rounded-full">${escape("+")}</span> <span class="text-lg text-[#690571] font-[900]" data-svelte-h="svelte-1j8np0l">Track your progress</span></div> ${``}</div>    <div class="${"rounded-lg mb-4 " + escape(
    "inactive-accord",
    true
  )}"><div class="${"flex justify-left items-center p-4 gap-3 cursor-pointer " + escape(
    "inactive-accord",
    true
  ) + " hover:bg-purple-300 rounded-lg"}"><span class="text-[20px] bg-[#690571] py-0 px-[10px] rounded-full">${escape("+")}</span> <span class="text-lg text-[#690571] font-[900]" data-svelte-h="svelte-d89bno">Get rewarded</span></div> ${``}</div></div></div></div> <div data-svelte-h="svelte-1rpihbe"><img alt="iphone-app-display"${add_attribute("src", Frame1000011791, 0)} class="w-[600px]"></div></div></section>  <section class="max-md:mt-[20px] max-md:mb-[20px] mt-[-100px]" data-svelte-h="svelte-bbw31s"><div class="flex justify-center gap-3 my-10 max-md:mx-0 lg:gap-7"><div class="lg:w-[350px]"><img class=""${add_attribute("src", Frame1000011801, 0)} alt="Create"></div> <div class="lg:w-[350px]"><img class=""${add_attribute("src", Frame1000011802, 0)} alt="Connect"></div> <div class="lg:w-[350px]"><img class=""${add_attribute("src", Frame1000011803, 0)} alt="Challenge"></div></div></section>  <section class="grid gap-2 max-md:hidden my-[70px]"><h1 class="max-md:text-[25px] max-md:leading-[1.2] text-[40px] my-[50px] font-[400] leading-[1] text-center bricolage text-black" data-svelte-h="svelte-1ghcd2h">Ready to Challenge Yourself? <br>Join CHUB</h1> <div class="flex flex-row flex-wrap gap-3 justify-center" data-svelte-h="svelte-qa6lvl"><div><img${add_attribute("src", Frame1000011826, 0)} alt="" class="rounded-lg h-auto object-cover w-[550px]"></div> <div><img${add_attribute("src", CombinedFaces, 0)} alt="" class="rounded-lg h-auto object-cover w-[550px]"></div></div> <div class="flex flex-row flex-wrap gap-3 justify-center h-[500px]"><div class="flex justify-center w-[550px] gap-4"><div class="bg-[#fdf4fe] h-full w-full rounded-lg flex flex-col"><img${add_attribute("src", Design04, 0)} alt="Chat Icon" class="mt-[40px] ml-[20px] rounded-lg h-auto w-[200px]"> <p class="mt-[20px] ml-[20px] text-black font-[500] text-[26px]" data-svelte-h="svelte-d42l4x">Chub Champions: <br> Real stories, Real <br> Success</p> <button class="buttons flyer-button my-[14px] ml-[20px] w-[40%] duration-200" data-svelte-h="svelte-10ikpoo">Try CHUB today</button></div></div> <div class="flex flex-row gap-1 justify-center w-[550px] h-[500px]" data-svelte-h="svelte-y90kjf"><div class="bg-[#edd9ff] w-[50%] h-full rounded-lg flex flex-col"><p class="mt-[20px] ml-[20px] text-black font-bold text-lg">Earn points, <br> gems and <br>badges</p> <img${add_attribute("src", Design4, 0)} alt="" class="rounded-xl object-contain w-[full]"></div> <div class="flex flex-col gap-4 h-full w-[50%]"><div class="bg-[#EEEEF0] h-full w-full rounded-lg flex flex-col"><p class="mt-[20px] ml-[20px] text-black font-bold text-lg">Be part of a <br> closely-knit <br> community</p> <div class="w-full flex-grow flex items-end justify-end"><img${add_attribute("src", DiscussionImg, 0)} alt="Chat Icon" class="rounded-lg h-auto w-[200px]"></div></div> <div class="bg-[#FFCADC] h-full w-full rounded-lg flex flex-col"><p class="mt-[20px] ml-[20px] text-black font-bold text-lg">Cultivate habits, <br> hit milestones</p></div> </div></div></div></section>      <section id="preview" class="max-md:my-[50px] mt-[100px] relative w-full bg-[#fbe7ff] max-[900px]:hidden pt-[80px]" data-svelte-h="svelte-1cn26xj"><div class="flex justify-center items-center flex-wrap flex-col"><div class="w-[60%]"><h1 class="max-md:text-[25px] max-md:leading-[1.2] text-[40px] mt-[50px] font-[400] leading-[1] text-center bricolage text-black">Experience All The Cool Features <br> Before Anyone Else! <br> Join The Waitlist!</h1> <p class="text-center font-[100] pt-5 text-black">Be the First to Experience the Chub App!</p></div> <div class="w-[60%] mt-[100px] flex justify-center"><img${add_attribute("src", iphoneMeta, 0)} alt="" class="w-[600px]"></div></div> </section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
