import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return{
        links:[
            {'icon':'mdi-view-dashboard','title':'پنل مدیریت','router':'/'}
        ],
        AreaChart:[
            {
                'categories':["2018-09-19T00:30:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
                'data': [230,804,524,426,167,645,700]
            }
        ],
        BarChart:{
            data: [9, 20, 30, 20, 10,20,30,20,10,20,30,20],
            categories: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"]
        },
        statistics:[
            {'color':'deep-purple lighten-2','icon':'mdi-eye','title':'تعداد نمایش پروفایل','subtitle':'120.000'},
            {'color':'blue lighten-2','icon':'mdi-account','title':'دنبال کنندگان','subtitle':'120.000'},
            {'color':'green lighten-2','icon':'mdi-account-plus','title':'دنبال شوندگان','subtitle':'120.000'},
            {'color':'deep-orange darken-1','icon':'mdi-bookmark-minus','title':'پیام ذخیره شده','subtitle':'120.000'}
        ],
        RecentMessages:[
            {'icon':'icon/2.jpg','Title':'رضا میرزایی','Subtitle':'@reza'},
            {'icon':'icon/1.jpg','Title':'سریا قمبر پور','Subtitle':'@ghambarnezad'},
            {'icon':'icon/5.jpg','Title':'فاطمه بت شکن','Subtitle':'@fateme'}
        ],
        LatestComment:[
            {'image':'icon/5.jpg','name':'بی بی','content':'فارغ التحصیلی شما را تبریک می گویم!'},
            {'image':'icon/2.jpg','name':'غلام','content':'عجب طراحی شگفت انگیزی!  آیا می توانید آموزش دیگری برای این طرح تهیه کنید؟'}
        ],
        donutchart:{
            labels: ["مرد", "زن"],
            data:[70,30]
        },
        ProfileMenu:[
            {'icon':'mdi-account','title':'پروفایل من','router':'/'},
            {'icon':'mdi-logout','title':'خروج از پنل','router':'/'},
        ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
