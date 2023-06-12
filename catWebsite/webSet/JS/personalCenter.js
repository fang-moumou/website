const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    // 背景图
  header.innerHTML =
    '<img src="../images/万叶.jpeg" alt="" />'
  title.innerHTML = '个人主页'
  excerpt.innerHTML ='个人介绍情况'
    // 头像
  profile_img.innerHTML =
    '<img src="../images/万叶.jpeg" alt="" />'
  name.innerHTML = '方冰鑫'
//   生日月 日 年
  date.innerHTML = '03 05, 2001'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}