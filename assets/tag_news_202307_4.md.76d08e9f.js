import{_ as e,o as t,c as s,O as r}from"./chunks/framework.7d066bc9.js";const a="/assets/W020230707333330232478.721534b1.png",o="/assets/W020230707333408365625.5e800bc5.png",n="/assets/W020230707333481054928.2ed57b1b.png",f=JSON.parse('{"title":"力学所融合物理神经网络研究取得进展","description":"","frontmatter":{"title":"力学所融合物理神经网络研究取得进展","hidden":false,"tag":["力学","物理学","工程与技术科学"],"sticky":100,"top":1},"headers":[],"relativePath":"tag_news/202307_4.md","filePath":"tag_news/202307_4.md","lastUpdated":null}'),p={name:"tag_news/202307_4.md"},_=r('<h2 id="力学所融合物理神经网络研究取得进展" tabindex="-1">力学所融合物理神经网络研究取得进展 <a class="header-anchor" href="#力学所融合物理神经网络研究取得进展" aria-label="Permalink to &quot;力学所融合物理神经网络研究取得进展&quot;">​</a></h2><blockquote><p><strong>标签:</strong> [力学] [物理学] [工程与技术科学] [信息与系统科学]<br><strong>高频词:</strong> 数据, 流场, PINNs, 求解, 研究</p></blockquote><p>通过实验获得的流体数据通常是稀疏或不完整的，如何利用不完美的流场数据提取流场的高分辨率数据或特征信息在实验流体力学领域是重要的难题，对高精度数据获取具有重要意义。传统途径多采用直接求解NS方程的方法，利用数据同化，嵌入稀疏流场数据进行求解或预测。此类传统方法需要大量的前期代码工作，且需要精细的网格划分辅以高精度的求解，灵活性较低。融合物理神经网络（Physics-Informed Neural Network，PINNs）因可以融合数据和方程，并在求解过程中不用划分精细的网格，在相关领域获得了大量应用，并在层流流动和较低雷诺数流动中获得了重要结果。然而，针对强非线性的流体力学方程和复杂的高雷诺数流动，现阶段的PINNs不能有效求解，在工程实用性方面亟需提升。</p><p>近期，中国科学院力学研究所流固耦合与数值计算团队在融合物理神经网络的流体力学实用化研究中取得进展。面对流场重构，流场超分辨率求解等问题，研究模拟工程实际中的稀疏测量问题，对低雷诺数圆柱绕流，探究不同时空稀疏率数据下以及局部缺失数据下PINNs方法的流场重构能力，实现了空间稀疏1%以及空间极度数据缺失下的高效流场重构。进一步，面向流场特征提取问题，研究提出了PINNs增强的POD方法即PINN-POD方法，利用PINNs从稀疏数据中重构完整流场的能力，减轻了传统POD对高时空分辨率数据的依赖，并通过时域分解策略，实现了从少量长时间测量数据中准确提取流场的结构特征。针对大时空域PINNs训练时间长、对高雷诺数流动拟合精度低的普遍性问题，研究提出了基于重叠域时空分解的并行计算框架，并融合RANS方程辅助时空重叠域分解设计，实现了对于较高雷诺数流动的高效、准确求解。</p><p>相关研究成果发表在<em>Acta Mechanica Sinica</em>和<em>Physics of Fluids</em>上。其中，关于PINNs时空并行框架研究的工作被<em>Physics of Fluids</em>选为Featured Article。研究工作得到国家重点研发计划、中国科学院国际伙伴计划和国铁集团科技研究开发计划重大课题等的支持。</p><p>论文链接：<a href="https://link.springer.com/article/10.1007/s10409-022-22302-x" target="_blank" rel="noreferrer">1</a>、<a href="https://doi.org/10.1063/5.0138287" target="_blank" rel="noreferrer">2</a>、<a href="https://doi.org/10.1063/5.0155087" target="_blank" rel="noreferrer">3</a></p><p><img src="'+a+'" alt=""></p><p>图1. PINNs在极限数据下的流场重构特性</p><p><img src="'+o+'" alt=""></p><p>图2. 传统POD模态和PINN-POD模态对比</p><p><img src="'+n+'" alt=""></p><p>图3. STPINNs的时空并行框架设计</p>',12),c=[_];function i(l,N,d,P,m,h){return t(),s("div",null,c)}const I=e(p,[["render",i]]);export{f as __pageData,I as default};
