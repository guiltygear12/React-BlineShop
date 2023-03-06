import Header from "./components/Header"
import Footer from "./components/Footer"


function Home(){
    return(
        <div className="home">
            <Header />
            {/* 1번 컨텐츠 - 메인슬라이드 배너 */}
            {/* 2번 컨텐츠 바로가기 배너 */}
            {/* 3번 컨텐츠 - 카테고리별 인기 상품 */}
            <Footer />
        </div>
    )
}
export default Home