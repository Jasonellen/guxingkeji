window.api={
    CH:{
        newsInfo:"http://120.78.68.78:8081/api/newsInfo", //新闻分页列表
        contentInfo:function(id){
            return "http://120.78.68.78:8081/api/contentInfo/"+id
        }, //新闻详情接口
        case:"http://120.78.68.78:8081/api/case"
    },
    EN:{
        newsInfo:"http://120.78.68.78:8081/api/newsInfo/english",
        contentInfo:function(id){
            return "http://120.78.68.78:8081/api/contentInfo/"+id+'/english'
        },
        case:"http://120.78.68.78:8081/api/case/english"
    }
}
window.text={
    CH:{
        indextop:{
            0:{
                title:'资深技术+专业营销团队',
                detail:'以技术为基石，个性化内容为导向，用营销实力说话'
            },
            1:{
                title:'权威数据分析',
                detail:'百亿级多方多维度数据，实时、精准、权威刻画用户特征'
            },
            2:{
                title:'最全渠道覆盖',
                detail:'BAT广告资源核心链接，多家头部媒体互联网战略合作伙伴，覆盖所有品类'
            },
            3:{
                title:'服务经验丰富',
                detail:'与超过100家名企合作，建立长期伙伴关系'
            }
        },
        more:'加载更多>>',
        select:'他们都选择了谷形科技',
        bottom:{
            contactus:'联系我们',
            address:'广东省深圳市南山区南头街道田厦翡翠明珠写字楼2007B',
            detail:{
                title:' 谷形科技合作伙伴精选',
                list:['· 具有良好的互联网思维','· 在细化领域具有核心竞争力']
            }
        }
    },
    EN:{
        indextop:{
            0:{
                title:'Professional web tech & marketing team',
                detail:'Leveraging latest technology, combining with creative contentand showing our strength by marketing effect'
            },
            1:{
                title:'Authentic data analysis',
                detail:'Enormous data from multiple dimensions and channels,precisely describing the audience’s features'
            },
            2:{
                title:'Comprehensive channels coverage',
                detail:'Core resources linking with Baidu, Alibaba and Tencent;becoming the strategic partners with many popular internet media; covering all categories'
            },
            3:{
                title:'Rich service experience',
                detail:'Cooperating with more than 100 well-known enterprises, establishing long-term partnership'
            }
        },
        more:'Load More>>',
        select:'They chose GuShing',
        bottom:{
            contactus:'Contact us',
            address:"Nanshan district, shenzhen city, guangdong province in southern China's streets Tian Sha emerald pearl office 2007 b",
            detail:{
                title:' Gushing partner selection',
                list:['· Has the good Internet thinking','· With the core competitiveness in the field of refining']
            }
        },
        
    }
}