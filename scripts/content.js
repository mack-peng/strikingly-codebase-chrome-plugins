// 创建按钮元素
const button = document.createElement('button');
button.type = 'button';
button.title = '';
button.dataset.container = 'body';
button.className = 'js-ci-action btn btn-blank btn-transparent ci-action-icon-container ci-action-icon-wrapper play js-icon-play';
button.dataset.originalTitle = 'Play';

// 创建 SVG 元素
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.classList.add('s16', 'ic-play');
const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '/assets/icons-228b3b53d9a397a1ac64e40bd07152a8a225245f6e754e9ce7450c1dee53e659.svg#play');
svg.appendChild(use);
button.appendChild(svg);

// 创建 div 元素
const div = document.createElement('div');
div.style.width = '25px';
div.style.height = '25px';
div.style.display = 'inline-block';
div.style.borderRadius = '50%';
div.style.border = '2px solid #000'; // 可根据需要调整边框样式
div.style.display = 'inline-flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.paddingLeft = '3px';
div.style.position = 'relative';
div.style.top = '2px';

// 将按钮放入 div 中
div.appendChild(button);

// 找到目标元素
const targetElement = document.querySelector('.mr-widget-heading > .media > .media-body');
if (targetElement) {
    // 将 div 插入到目标元素的最后
    targetElement.appendChild(div);
}

// 给按钮添加点击事件
button.addEventListener('click', function () {
    // 找到 .js-builds-dropdown-list 内部的所有按钮
    const dropdownButtons = document.querySelectorAll('.js-builds-dropdown-list button.play');
    dropdownButtons.forEach(function (dropdownButton) {
        // 执行点击操作
        dropdownButton.click();
    });
});
    
