<template>
    <div class="home">
        <div class='search-bar'>
            <van-row>
                <van-col span='3'><img class="lacation-img" :src="lacationImg" alt="定位"></van-col>
                <van-col span='16'><input type="text" /></van-col>
                <van-col span='5'><van-button type="primary" size="mini">查找</van-button></van-col>
            </van-row>
        </div>
        <!-- 轮播图 -->
        <div class="swiper-area">
            <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(banner,index) in bannerPicArray" :key='index'>
                    <img :src="banner.imageUrl" alt="banner">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        <!-- type bar-->
        <div class="type-bar">
            <div  v-for="(cate,index) in category" :key="index" >
                <img v-lazy="cate.image" width="90%" />
                <span>{{cate.mallCategoryName}}</span> 
            </div>
        </div>
        <!--Recommend goods area-->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <swiper :options="swiperOption1">
                    <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                                <img :src="item.image" width="80%" />
                                <div>{{item.goodsName}}</div>
                                <div>￥{{item.price}} (￥{{item.mallPrice}})</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!--floor one area-->
        <v-floor :floorData="floor1" :floorTitle='floorName.floor1'></v-floor>
        <v-floor :floorData="floor2" :floorTitle='floorName.floor2'></v-floor>
        <v-floor :floorData="floor3" :floorTitle='floorName.floor3'></v-floor>
        <!--Hot Area-->
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
                 <van-list>
                    <van-row gutter="0">
                        <van-col span="12" v-for="( item, index) in hotGoods" :key="index">
                             <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Floor from './base/Floor.vue'
import goodsInfo from './base/goodsInfoComponent'
import url from '../serviceAPI.config.js'
export default {
    name: 'Home',
    data() {
        return {
            lacationImg: require('../assets/images/location.png'),
            bannerPicArray:[
                {imageUrl: '//gw.alicdn.com/tps/i4/TB1W4Y4AXT7gK0jSZFpSuuTkpXa.jpg_790x10000Q75.jpg_.webp'},
                {imageUrl: '//gw.alicdn.com/tps/i4/TB1pRk9tVY7gK0jSZKzSuuikpXa.jpg_790x10000Q75.jpg_.webp'},
                {imageUrl: '//gw.alicdn.com/tps/i4/TB1pRk9tVY7gK0jSZKzSuuikpXa.jpg_790x10000Q75.jpg_.webp'}
            ],
            category: [],
            recommendGoods: [],
            floor1: [],
            floor2: [],
            floor3: [],
            floorName: {},
            hotGoods: [],
            swiperOption: {
                autoplay: {
                    disableOnInteraction: false,
                },
                loop: true,
                pagination:{
                    el:'.swiper-pagination'
                }
            },
            swiperOption1: {
                slidesPerView: 3,
            }
        }
    },
    created() {
        this.$http({
            method: 'get',
            url: url.getIndexInfo
        }).then(res => {
            this.category = res.data.data.category;
            this.recommendGoods = res.data.data.recommend
            this.floor1 = res.data.data.floor1              //楼层1数据
            this.floor2 = res.data.data.floor2             //楼层1数据
            this.floor3 = res.data.data.floor3              //楼层1数据
            this.floorName = res.data.data.floorName
            this.hotGoods = res.data.data.hotGoods           //热卖商品
        }).catch(error => {

        })
    },
    components: {
        Swiper,
        SwiperSlide,
        'v-floor': Floor,
        goodsInfo
    },
}
</script>

<style lang='less' scoped>
.search-bar{
    height: 2.2rem;
    background-color: #e5017d;
    line-height:2.2rem;
    text-align: center;
    overflow: hidden;
    .lacation-img {
        width: 1.4rem;
        margin: 0.4rem 0.5rem;
    }
    input {
        width: 100%;
        height: 1.4rem;
        padding-left: 1rem;
        background: #e5017d;
        border: 1px solid #999;
        border-radius: 50px;
    }
}
.swiper-area{
    width: 100%;
    max-height: 13rem;
    clear:both;
    overflow: hidden;
    img {
        width: 100%;
        height: 10rem;
    }
}
.type-bar{
    background-color: #fff;
    margin: 1rem 0.3rem;
    border-radius: .3rem;
    font-size:14px;
    display: flex;
    flex-direction:row;
    flex-wrap:nowrap;
}
.type-bar div{
    padding: .3rem;
    font-size: 12px;
    text-align: center;
}
 .recommend-area{
    background-color: #fff;
    margin-top: .3rem;
}
.recommend-title{
    border-bottom:1px solid #eee;
    font-size:14px;
    padding:.3rem 0;
    color:#e5017d;
    background-color: #eee;
}
.recommend-body{
    border-bottom: 1px solid #eee;
}

.recommend-item{
    width:99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
}
.hot-area{
    text-align: center;
    font-size:14px;
    height: 1.8rem;
    line-height:1.8rem;
}
.hot-title {
    background-color: #eee;
}
</style>
