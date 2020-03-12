 <!-- Pagination -->
 <template>
        <nav aria-label="FrontPage" class="FrontPage">
            <ul class="pagination front-font-size">
                <!-- 假如pagination.has_pre === false，就disabled顯示 -->
                <li class="page-item" :class="{'disabled' : !frontpagination.has_pre}">
                    <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatapage(frontpagination.current_page - 1)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in frontpagination.total_pages" :key="page" 
                :class="{'active' : frontpagination.current_page === page}">
                    <a class="page-link" href="#" @click.prevent="updatapage(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{'disabled' : !frontpagination.has_next}">
                    <a class="page-link" href="#" aria-label="Next"  @click.prevent="updatapage(frontpagination.current_page + 1)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
</template>

<script>
export default {
    //這裡的pagination是從父層傳過來的資料，抓過來後的資料HTML也都要更改名稱
    props: ['frontpagination'],
    methods: {
        updatapage(page) { //點即觸發事件
            this.$emit('userfrontpage',page); 
        }
    }
};
</script>


<style scoped>
    .FrontPage {
        display: flex;
        justify-content: center;
    }
    .front-font-size {
        font-size: 16px;
    }
</style>