import classNames from "classnames/bind";
import styles from './Footer.module.scss';

const cx= classNames.bind(styles);
const   Footer = () => {
    return ( 
        <footer className={cx('footer')}>
             <div className={cx('footer-content')}>
                <h5>SHOPCXT-CHẤT LƯỢNG TẠO LÊN THÀNH CÔNG</h5>
                <p>ShopCXT-ứng dụng mua sắm đồ điện tử chất lượng, tin cậy, an toàn và giá tốt! 
                    ShopCXT là nền tảng giao dịch trực tuyến hiệu quả top đầu tại Việt Nam.
                    Với sự đảm bảo của ShopCXT , bạn sẽ mua hàng trực tuyến an tâm và nhanh 
                    chóng hơn bao giờ hết! </p>
                <h5>MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN</h5>
                <p>Nếu bạn đang tìm kiếm một trang web để mua hàng trực tuyến thì ShopCXT 
                    là một sự lựa chọn tuyệt vời ko thể thiếu trong thời gian gần đây </p>
             </div>
             <div className={cx('category-item')}>
                <div className={cx('smartphone-item')}>
                    <h5>ĐIỆN THOẠI & PHỤ KIỆN</h5>
                    <p>Điện thoại | Máy tính bảng | Pin Dự Phòng |Pin Gắn Trong | 
                        Cáp và Bộ Sạc | Ốp lưng, bao da, Miếng dán điện thoại | 
                        Bảo vệ màn hình | Đế giữ điện thoại | Bảo vệ màn hình | 
                        Để giữ điện thoại | Thẻ nhớ | Sim | Phụ kiện khác | Thiết bị khác
                    </p>
                </div>
                <div className={cx('laptop-item')}>
                    <h5>MÁY TÍNH & LAPTOP</h5>
                    <p>Máy Tính Bảng | Màn Hình | Linh Kiện Máy Tính | Thiết Bị Lưu Trữ |
                        Thiết Bị Mạng | Máy In, Máy Scan & Máy Chiếu | Phụ Kiện Máy Tính |
                         LapTop | khác | Gaming

                    </p>
                </div>
                <div className={cx('watch-item')}>
                    <h5>ĐỒNG HỒ</h5>
                    <p>Đồng Hồ Nam | Đọng Hồ Nữ | Bộ Đòng Hồ & Đồng Hồ Cặp | Đồng Hồ Trẻ Em |
                         Phụ Kiện Đồng Hồ | Khác
                    </p>

                </div>

                <div className={cx('electric-device')}>
                    <h5>THIÊT BỊ ĐIỆN TỬ</h5>
                    <p>Thiế bị đeo thông minh | Phụ kiện TV | Máy Game Console | Phụ kiện Coonsole |
                        Đĩa Game | Linh phụ kiện | Tai nghe nhét tai | Loa | Tivi | Tivi Box | Headphones
                    </p>
                </div>

             </div>
        </footer>
     );
}

export default Footer;