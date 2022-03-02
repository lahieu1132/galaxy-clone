import React from 'react'

function BannerFooter() {
  return (
    <div className='banner__footer  w-full py-10 text-white'>
        <div className='mx-auto'>
          <div className=' flex lg:justify-around flex-wrap'>
            <div className='w-[550px] text-xl'>
                <img className='w-32' src='https://assets.glxplay.io/web/images/logoglx.svg' alt=''/>
                <p className='mt-2 font-[400]'>Galaxy Play là dịch vụ được cung cấp bởi Công ty Cổ phần Galaxy Play, thành viên của Công ty Cổ phần Galaxy M&E</p>
                <p className='mt-2 font-[400]'>Địa chỉ: 59 Xa Lộ Hà Nội, Phường Thảo Điền, Quận 2, Thành Phố Hồ Chí Minh, Việt Nam.</p>
                <p className='mt-2 font-[400]'>Mã số doanh nghiệp: 0106539659.</p>
                <p className='mt-2 font-[400]'>Ngày cấp mã số doanh nghiệp: 15/5/2014.</p>
                <p className='mt-2 font-[400]'>Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội.</p>
            </div>
            <div className='mt-16 w-[200px] text-[#9ea0a8] order-1'>
              <h2 className='text-white text-lg font-medium'>GIỚI THIỆU</h2>
              <p className='text-lg' href='/'>Quy chế sử dụng Dịch vụ</p>
              <p className='text-lg' href='/'>Chính sách bảo mật</p>
              <p className='text-lg' href='/'>Khuyến mãi</p>
            </div>
            <div className='mt-16 w-[200px] text-[#9ea0a8] order-1'>
              <h2 className='text-white text-lg font-medium'>GIỚI THIỆU</h2>
              <p className='text-lg' href='/'>Quy chế sử dụng Dịch vụ</p>
              <p className='text-lg' href='/'>Chính sách bảo mật</p>
              <p className='text-lg' href='/'>Khuyến mãi</p>
            </div>
            <div className='mt-16 lg:order-1'>
              <h2 className='uppercase '>Tải ứng dụng</h2>
              <div className='flex flex-row mt-4'>
                <img src='//assets.glxplay.io/web/responsive/w200/android-app-download-button.png' alt='' />
                <img className='ml-8' src='//assets.glxplay.io/web/responsive/w200/ios-app-download-button.png' alt=''/>
              </div>
              <h2 className='uppercase mt-8'>KẾT NỐI VỚI CHÚNG TÔI</h2>
              <div className='flex flex-row mt-4'>
                <img className='mr-4' src='//assets.glxplay.io/web/images/icon-social-facebook.svg' alt=''/>
                <img className='mr-4' src='//assets.glxplay.io/web/images/icon-social-insta.svg' alt=''/>
                <img className='mr-4' src='//assets.glxplay.io/web/images/icon-social-youtube.svg' alt=''/>
                <img className='mr-4' src='//assets.glxplay.io/web/images/icon-social-tiktok.svg' alt=''/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BannerFooter