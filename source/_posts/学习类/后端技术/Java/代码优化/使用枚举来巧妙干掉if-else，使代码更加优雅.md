---
title: 使用枚举来巧妙干掉if-else，使代码更加优雅
date: 2022-09-09 20:51:32
categories:
    - 学习类
    - 后端技术
    - Java
    - 代码优化
tags:
    - 代码优化
    - 减少ifelse
---
**导读：**本文通过一个简单的例子来展示如何通过枚举巧妙地干掉if-else，使代码看起来更佳优雅。

**场景：** 当我们接收到一些数据需要对其进行处理时，由于它们来自于不同的渠道（如：腾讯，头条），不同渠道所需的处理方式不同，下面我们写一个简单Demo来实现该的场景。

![](https://p3-sign.toutiaoimg.com/dfic-imagehandler/a505ff21-85dc-420d-a512-6d501cf656ac~noop.image?_iz=58558&from=article.pc_detail&x-expires=1663332603&x-signature=WnH8DbFJPM2NTftVuODu9PypsIE%3D)

# 解决思路

1、首先构建一个 GeneralChannelRule 基础规则抽象类，定义一个抽象方法process()，不同的渠道都需要实现该抽象方法。

```
public abstract class GeneralChannelRule {
 public abstract void process();
}
```

2、编写一个腾讯的规则类，定义具体对于腾讯渠道数据的处理逻辑

```
public class TencentChannelRule extends GeneralChannelRule
 		@Override
    public void process() {
        // Tencent处理逻辑
    }
}
```

3、编写一个头条的规则类，定义具体对于头条数据的处理逻辑

```
public class TouTiaoChannelRule extends GeneralChannelRule
 		@Override
    public void process() {
        // TouTiao处理逻辑
    }
}
```

4、建立一个简单的枚举类

```
public enum ChannelRuleEnum {
    /**
     * 头条
     */
    TOUTIAO("TOUTIAO"),
    /**
     * 腾讯
     */
    TENCENT("TENCENT"),
    ;
  ....
}
```

5、使用规则对数据进行处理。

```
public static void main(String[] args) {
        //这里我们模拟接收到的数据，其渠道为为TOUTIAO，来自头条的数据
        String sign = "TOUTIAO";
        GeneralChannelRule rule;
        //根据对应渠道获取对应的具体规则实现类
        if (ChannelRuleEnum.TENCENT.code.equals(sign)) {
            rule = new TencentChannelRule();
        } else if (ChannelRuleEnum.TOUTIAO.code.equals(sign)) {
            rule = new TouTiaoChannelRule();
        } else {
            //匹配不到
        }
  			//执行
        rule.process();
    }
```

**解析**：如果通过上面的方式，则存在则两个缺点。

- 当我们需要新增新的渠道的时候，需要对main方法中的逻辑进行修改调整。这违背了设计模式中的开放封闭规则。

> 开放封闭原bai则的核心的思想是软件实体是可扩du展，而不可zhi修改的。也就是说，对扩展是开dao放的，而对修改是封闭的

- 新增渠道后，修改代码会产生大量的if else，不太优雅。

为了解决以上的两个问题，我们可以**借助枚举类来巧妙优化**。

![](https://p3-sign.toutiaoimg.com/dfic-imagehandler/afed0620-5bb9-4320-a663-cb87f868303f~noop.image?_iz=58558&from=article.pc_detail&x-expires=1663332603&x-signature=HoICSU9qcH%2BEx2bny3B2HWvbMEg%3D)

# 新的思路

1、下面我们调整一下枚举类，增加一个GeneralChannelRule属性，并且给对应渠道构建对应的GeneralChannelRule实现类，新增一个match() 匹配方法。

```
public enum ChannelRuleEnum {

    /**
     * 头条
     */
    TOUTIAO("TOUTIAO",new TouTiaoChannelRule()),
    /**
     * 腾讯
     */
    TENCENT("TENCENT",new TencentChannelRule()),
    ;

    public String name;

    public GeneralChannelRule channel;

    ChannelRuleEnum(String name, GeneralChannelRule channel) {
        this.name = name;
        this.channel = channel;
    }

  //匹配
    public static ChannelRuleEnum match(String name){
        ChannelRuleEnum[] values = ChannelRuleEnum.values();
        for (ChannelRuleEnum value : values) {
            if(value.name.equals(name)){
                return value;
            }
        }
        return null;
    }
    public String getName() {
        return name;
    }

    public GeneralChannelRule getChannel() {
        return channel;
    }
}
```

2、改写程序

```
public static void main(String[] args) {
        String sign = "TOUTIAO";
        ChannelRuleEnum channelRule = ChannelRuleEnum.match(sign);
        GeneralChannelRule rule = channelRule.channel;
        rule.process(sign);
    }
```

**解析：**通过使用枚举类，在枚举中将 key 与 规则具体实现进行绑定。通过改变：

- 可以减少if -else使得代码更加优雅
- 如果需要新增渠道，我们只需要在编写具体规则实现类并继承GeneralChannelRule抽象类，并在枚举类中新增的枚举，而不需要改动到原先的任何代码。这符合了开发封闭原则。

# 最后

以上是通过枚举来巧妙干掉if-else的方案，对于减少 if-else 还有很多有趣的解决方案（如：状态设计模式等），感兴趣的朋友去查阅相关的资料。