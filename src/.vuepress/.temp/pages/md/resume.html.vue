<template><div><h2 id="个人信息" tabindex="-1"><a class="header-anchor" href="#个人信息"><span>个人信息</span></a></h2>
<ul>
<li>姓名</li>
<li>电话</li>
<li>邮箱</li>
<li>毕业时间</li>
<li>工作时间</li>
<li>Github：<a href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a></li>
</ul>
<h2 id="毕业院校" tabindex="-1"><a class="header-anchor" href="#毕业院校"><span>毕业院校</span></a></h2>
<ul>
<li>时间、院校、专业、学位</li>
<li>荣誉、成绩</li>
</ul>
<!-- more -->
<h2 id="专业技能" tabindex="-1"><a class="header-anchor" href="#专业技能"><span>专业技能</span></a></h2>
<ul>
<li>熟练掌握 Java 核心知识、JUC、HashMap、斐波那契散列等，具备良好的面向对象编程思想。</li>
<li>熟练掌握 Java 设计模式，如工厂、代理、组合、策略等设计模式，并善用设计原则构建可复用代码。</li>
<li>熟练使用 IDEA、Eclipse、Visual Studio Code、Navicat、PostMan、Git、Maven、SVN 等开发工具。</li>
<li>深入理解 JVM 底层原理，熟悉 JVM 各类垃圾收集器的使用及核心参数的调优，具备一定的 JVM 调优能力。</li>
<li><code v-pre>深入学习 Spring 核心流程模块，如IOC、AOP、依赖倒置等，掌握Spring解决复杂场景所需的分治、抽象和知识（设计模式、设计原则），能从核心原理上解决Spring场景问题。同时，具备基于 Spring 开发 SpringBoot Starter 的技能，减少研发成本，为复杂项目提供通用技术组件。</code></li>
<li><code v-pre>深入学习 MyBatis 核心流程模块，包括会话、反射、代理、事务和插件，熟练掌握 ORM 框架的设计思想、实现方式和应用价值。并根据需求结合 MyBatis 插件机制，开发企业所需的功能，如数据分页、数据库表路由、监控日志和数据安全等。</code></li>
<li>深入理解 Spring Boot，Spring Cloud 等微服务框架的设计原理及底层架构，熟悉各种微服务架构设计比如服务注册与发现，服务降级，限流，熔断，服务网关路由设计，服务安全认证架构。</li>
<li>熟悉 Dubbo、Zookeeper 等分布式服务协调与治理等技术。</li>
<li>熟练掌握 MySql，掌握 MySQL 主从同步，读写分离技术以及集群的搭建，具备一定的 SQL 调优能力。</li>
<li>深入理解 Redis 线程模型，熟练掌握 Redis 的核心数据结构的使用场景，熟悉各种缓存高并发的使用场景，比如缓存雪崩，缓存穿透等。</li>
<li>熟练掌握分布式场景中的常见的技术问题及解决，比如分布式锁，分布式事务，分布式 session，分布式任务调度。</li>
<li>熟悉 RabbitMQ、Kafka 等常用的消息中间件进行消息的异步数据处理。</li>
<li>了解分布式搜索引擎 ElasticSearch，并能基于 ELK+Kafka 搭建分布式日志收集系统，以及 x-pack-jdbc 的扩展使用。</li>
<li>熟悉 docker 常用命令，能够实现基于 docker+Jenkins 实现自动化部署</li>
<li>掌握 Linux 常用命令，了解 Nginx 服务器的反向代理、负载均衡、动静分离等。</li>
<li>熟练运用 DDD 四层架构领域驱动设计，构建出易于迭代和维护的工程架构，遵守整洁代码、洋葱架构设计思想。</li>
</ul>
<h2 id="工作经历【在校生无】" tabindex="-1"><a class="header-anchor" href="#工作经历【在校生无】"><span>工作经历【在校生无】</span></a></h2>
<ul>
<li>公司</li>
<li>岗位</li>
<li>时间</li>
<li>职责【可选】</li>
<li>成绩【可选】</li>
</ul>
<h2 id="项目经验" tabindex="-1"><a class="header-anchor" href="#项目经验"><span>项目经验</span></a></h2>
<h3 id="_1-营销活动平台-lottery-微服务抽奖系统" tabindex="-1"><a class="header-anchor" href="#_1-营销活动平台-lottery-微服务抽奖系统"><span>1. 营销活动平台 - Lottery 微服务抽奖系统</span></a></h3>
<ul>
<li>系统架构：以 DDD 领域驱动设计开发，微服务拆分的分布式系统架构</li>
<li>核心技术：SpringBoot、MyBatis、Dubbo、MQ、MySQL、XDB-Router、ES、ZK</li>
<li>项目描述：抽奖系统是营销平台的重要微服务之一，可以满足 C 端人群的需求，例如拉新、促活、留存等。该系统运用抽象、分治和 DDD 知识，拆解服务边界，凝练领域服务功能。围绕抽奖服务建设领域服务，包括规则引擎、抽奖策略、活动玩法、奖品发放等。这可以满足业务产品快速迭代上线的需求，同时减少研发成本，提高交付效率。</li>
<li>核心职责：
<ul>
<li>【高级】构建以 DDD 分层结构的处理方式，搭建整个抽奖系统架构。运用设计原则和工厂、代理、模板、组合、策略等设计模式的综合使用，搭建易于维护和迭代的系统工程。</li>
<li>【高级】鉴于系统内有较多的规则策略过滤，包括准入、人群、风控、A/BTest等需求，为适应系统规模可快速开发和使用的方式，搭建了去中心化的量化人群规则引擎组件。通过业务需求对逻辑的扩展和内置引擎执行器的使用，完成自由组合的人群过滤服务。这降低了共性功能重复开发所带来的成本问题，并提高了研发效率。</li>
<li>【高级】根据实际秒杀峰值场景 <code v-pre>TPS 5000 ~ 8000</code> 的需求，开发了统一路由组件。该组件不仅可以满足差异化不同字段的分库分表组合，还支持 Redis 库存分片和秒杀滑动库存分块。而且，开发了统一路由 XDB-Router 的 SpringBoot Starter 技术组件。该套组件已经经历了多次大促活动场景的考验，支持横向扩展，可以满足业务规模的快速增长。</li>
<li>【简单】运用模板、策略、工厂三个设计模式，定义抽奖过程标准和实现对应的多类型抽奖的服务模块。</li>
<li>【简单】因活动秒杀的并发场景，将秒杀从最开始的数据库行级锁优化为Redis Key 加锁，又从 Redis Key 的独占锁，优化为滑块锁。优化后整体秒杀有了非常可观的性能提升。</li>
<li>【简单】解耦抽奖流程，把抽奖和发奖用MQ消息串联起来，避免一个流程太长，导致用户一直等待。</li>
</ul>
</li>
</ul>
<h3 id="_2-手写-mybatis" tabindex="-1"><a class="header-anchor" href="#_2-手写-mybatis"><span>2. 手写 MyBatis</span></a></h3>
<ul>
<li>项目架构：Object Relational Mapping</li>
<li>项目描述：MyBatis 是 Java 应用编程开发中，非常常用的技术框架。需要较深入的学习和使用，具备 MyBatis 插件开发能力，解决日常场景问题。才能更好更高效的工作。为此，深度学习了《手写MyBatis：渐进式源码实践》一书，完整实现了一个 MyBatis ORM 框架。技术积累颇深，提高了设计思维和编码能力。</li>
<li>个人收获：
<ul>
<li>首先学习到为什么日常使用 MyBatis 时，可以仅提供 IDao 接口，就可以关联对应配置的SQL语句，完成数据库操作。这是因为做了代理与映射，封装调用逻辑到 SqlSession 会话功能实现中。</li>
<li>掌握了数10种设计模式的运用，其中感触最大的是 MyBatis 如何管理多边服务的设计。如创建会话模型，统一调度执行器使用和数据的封装，并把这些复杂的操作，通过 SqlSessionFactory 工厂统一对外提供 SqlSession 服务。</li>
<li>彻底了解并掌握了 MyBatis Plugin 设计模型，这个技术可以让我基于 MyBatis 做出日志监控、库表路由、字段加解密等操作。为以后编程工作，提供更多的解决方案。</li>
<li>除此之外，还有一级缓存、二级缓存的装饰器模式使用，MyBatis 开发后与 Spring、SpringBoot 整合的实现，让我对 MyBatis 的全体系开发流程和对应的技术整合，已经非常清晰，便于以后应用和从根上快速排查解决问题，并给出合理的技术方案。</li>
</ul>
</li>
</ul>
<h3 id="_3-openai-应用服务-辅助工作提效工具开发" tabindex="-1"><a class="header-anchor" href="#_3-openai-应用服务-辅助工作提效工具开发"><span>3. OpenAI 应用服务 - 辅助工作提效工具开发</span></a></h3>
<ul>
<li>项目架构：微服务架构设计，OpenAI-SDK 多模型组件【ChatGLM、ChatGPT】、DDD 应用服务API封装、WEB REACT 前端界面【按需编写】</li>
<li>核心技术：SpringBoot、MyBatis、Redis/Guava、OKHttp3、OpenAI 大模型【可对接ChatGLM、腾讯混元等】、React、TypeScript</li>
<li>项目描述：此项目以应用OpenAI技术，对接多种大模型提供生成式服务，为XXX场景提效。项目的架构设计实现以微服务进行拆分，涵盖；OpenAI-SDK、OpenAI-API、公众号鉴权、企业支付【暂时申请中，如果你对接了可以写】等。并以模块化设计，积木式构建应用，让不同的场景诉求都可以配置化对接。</li>
<li>核心职责：
<ul>
<li>首先这是我们xxx公司/实践/实训的第一个OpenAI项目，后续势必会有更多的场景以不同的方式接入。包括 SDK 独立接入、API 接口接入、MQ 消息接入，以及使用提供好的服务类接入。所以在这部分设计的时候，我采用了微服务的架构设计，按照职责边界进行拆分设计。</li>
<li>采用 DDD 架构 API，以及便于不同领域模块的独立设计，一个领域就是一个功能域。在功能域中提供模型、仓储、事件、服务。这样可以更好扩展。</li>
<li>鉴于生成式服务的文本生成可能会有不可靠信息，所以对这部分内容添加了敏感词的过滤。并可根据不同场景选择不同范围的敏感词处理。</li>
<li>OpenAI 大模型有多种，这部分在架构上设计独立的 SDK，在实现上采用了 Session 会话模型进行处理，以及通过工厂处理服务。在细节对上，采用了 OKHttp3 框架完成模型对接，这样的方式更好扩展，代码也更易于维护。</li>
<li>在整套工程的设计实现中，采用了较多的分治、抽象的思想和设计模式和设计原则知识的运用，来解决各类场景问题。</li>
<li>对接微信扫码支付，完成从商品库、下单支付、异步发货、掉单补偿等核心流程实现。让用户可以在线购买对话额度。</li>
<li>注意：你还可以根据项目中提到的各类技术和章节，来编写你的职责。</li>
</ul>
</li>
</ul>
<h3 id="_4-服务治理-springboot-中间件" tabindex="-1"><a class="header-anchor" href="#_4-服务治理-springboot-中间件"><span>4. 服务治理 SpringBoot 中间件</span></a></h3>
<ul>
<li>系统架构：SpringBoot Starter 组件开发</li>
<li>核心技术：熔断、降级、限流、切量、白名单、人群控制</li>
<li>项目描述：该SpringBoot Starter中间件实现了熔断、降级、限流、切量、白名单等服务治理功能，减少了开发工作量和出错风险。利用SpringBoot的自动化配置机制简化了集成和使用，并提供了可扩展接口，以满足不同场景的需求。</li>
<li>核心职责：
<ul>
<li>鉴于组内同类需求的重复开发，设计并实现服务治理 SpringBoot Starter 中间件，提高开发效率和降低重复开发成本。 该中间件的核心功能包括服务治理中的熔断、降级、限流、切量和白名单等。</li>
<li>通过利用SpringBoot的自动化配置机制，该中间件可以简化集成和使用，同时提供足够的配置选项以满足不同场景的需求。</li>
<li>此外，该中间件还提供了可扩展的接口，方便用户根据自身需求扩展功能，从而更好地满足不同的业务需求。</li>
</ul>
</li>
</ul>
</div></template>


