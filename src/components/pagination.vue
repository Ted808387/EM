 <!-- Pagination -->
 <template>
        <nav aria-label="FrontPage" class="FrontPage">
            <ul class="pagination front-font-size">
                <!-- 假如pagination.has_pre === false，就disabled顯示 -->
                <li class="page-item" :class="{'disabled' : !getpagination.has_pre}">
                    <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatapage(getpagination.current_page - 1)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in getpagination.total_pages" :key="page" 
                :class="{'active' : getpagination.current_page === page}">
                    <a class="page-link" href="#" @click.prevent="updatapage(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{'disabled' : !getpagination.has_next}">
                    <a class="page-link" href="#" aria-label="Next"  @click.prevent="updatapage(getpagination.current_page + 1)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
</template>

<script>
export default {
    props: ['getpagination'],
    methods: {
        updatapage(page) {
            this.$emit('userpage',page); 
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