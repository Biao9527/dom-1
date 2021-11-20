// let div = dom.create('<div>newDiv</div>')
// console.log(div)
// dom.after(test,div)
// let div3 = dom.create('<div id="div3"></div>')
// dom.wrap(test,div3)
// let nodes = dom.empty(empty)
// console.log(nodes)

// dom.attr(test, 'title' , 'HI , I am Frank')
// let xx = dom.attr(test,'title')
// console.log(`title: ${xx}`)
// dom.text(test, '你好，这是新的文本')
// dom.style(test , {border: '1px solid red' , color: 'blue'})
// let aaa = dom.style(test , 'color')
// console.log(aaa)
// dom.style(test , 'color' , 'red')
// dom.class.add(test , 'red')
// dom.class.add(test , 'blue')
// dom.class.remove(test , 'red')
// console.log(dom.class.has(test , 'red'))
// let fn = ()=>{
//     console.log('点击了')
// }
// dom.on(test , 'click' , fn)
// dom.off(test, 'click' , fn )
// let test = dom.find('#test')[0]
// console.log(test)
// let test02 = dom.find('#test02')[0]
// console.log(test02)
// console.log(dom.find('.red' , test02)[0])

// let x =  dom.find('#s2')[0]
// console.log(dom.siblings(x))
// console.log(dom.next(x))
// console.log(dom.previous(x))
// const t = dom.find('#travel')[0]
// dom.each(dom.children(t) , (n)=> dom.style(n , 'color' , 'red'))
// console.log(dom.index(x))

const div = dom.find('#test>.red')[0]
console.log(div)
dom.style(div , 'color' , 'red')
const divList = dom.find('.red')
console.log(divList)
dom.each(divList, (n)=> console.log(n))