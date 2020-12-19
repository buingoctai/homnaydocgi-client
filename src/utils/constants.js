// Profile
const authorBrielf = {
  name: 'Bùi Ngọc Tài',
  workingPlace: 'Working at FPT Software',
  address: 'District 8, Ho Chi Minh city',
  phone: '0983053600',
};

const skillGroup = {
  programmer: 'Developer',
  writer: 'Writer',
  sharer: 'Sharer',
  linkedin: 'Linkedin',
};

const skillDescribe = {
  programmer: 'Front-End, Backend-End,Machine learning & Deep learning',
  writer: 'Blog & Content creator',
  sharer: 'Philosophy & Psychology',
};

const contentIntro = {
  reasonFBLink:
    'Các thông tin cung cấp bên trên giúp hệ thống xác định được chủ đề bài viết phù hợp cho người dùng. Mục tiêu giai đoạn đầu 70% manaual system, giai đoạn sau 70% automative system',
  appFunctional_1:
    'Tương lai gần, xây dựng hệ thống cá nhân hóa cây thông tin người dùng. Một phần hệ thống là tự động, một phần thủ công nhằm đảm bảo chất lượng bài viết.',
  appFunctional_2:
    'Tương lai xa, khi đã nhiều dữ liệu về cả định lượng và định tính, hệ thống hướng đến là RECOMMENDER SYSTEM và CHATBOT tích hợp Machine learning/Deep learning giúp người dùng tìm mạng lưới người chia sẻ phù hợp.',
};

const COOKIE_NAMES = {
  ACCESS_TOKEN: 'idToken',
};

const REQUEST_TIMEOUT = 300000; // 5 PHÚT

const TOPIC_TRANSLATE_CONTENT = [
  {
    eng: 'Front End',
    vn: 'Lập Trình Front End',
  },
  {
    eng: 'Back End',
    vn: 'Lập Trình Back End',
  },
  {
    eng: 'AI/ML/DL Research',
    vn: 'Nguyên Cứu AI/ML/DL',
  },
  {
    eng: 'Philosophy',
    vn: 'Triết Học',
  },
  {
    eng: 'Psychology',
    vn: 'Tâm Lý Học',
  },
  {
    eng: 'Sociology',
    vn: 'Xã Hội Học',
  },
  {
    eng: 'Sales',
    vn: 'Bán Hàng',
  },
  {
    eng: 'Marketing',
    vn: 'Marketing',
  },
  {
    eng: 'LeaderShip',
    vn: 'Lãnh Đạo',
  },
  {
    eng: 'Administration',
    vn: 'Quản Trị',
  },
  {
    eng: 'Personal View',
    vn: 'Góc Nhìn Cá Nhân',
  },
  {
    eng: 'Sport',
    vn: 'Thể Thao',
  },
];

const DIALOG_CODE = {
  MSG1: 'Để có trải nghiệm tốt nhất, các tính năng nâng cao đang phát triển. Vui lòng đợi!',
  MSG2: 'Bạn là admin. Hệ thống đang chuyển sang trang quản lý bài viết.',
  MSG3: 'Tính năng gửi thông báo qua Facebook Messenger đang phát triển.',
  MSG4: 'Tính năng đề nghị gửi bài viết đang phát triển.',
};

const FACEBOOK_DEV = {
  PAGE_ACCESS_TOKEN:
    'EAAVvoN2edJABAJEqQ585UC7FDga1Ku02jazR2ZBvcY3TPnmTQYG88jSp4XD2PABoaOO2znzfoZACCpq06YMJJ7CKT7rLQE79Khhkbww6tw8x6nig6TfZB9I59CU2YSpgwxzvYsiOlNbeTcZBUGvfMBZBXOMUWYJ808POUfYBUhwZDZD',
  ADMIN_MESSENGER_ID: '3119991678020925',
};

const DEFAULT_TOPIC = ['Back End', 'AI/ML/DL Research', 'Psychology', 'Personal View'];

const URL = [
  {
    subMenu: 'Nội dung',
    uRL: '/home',
  },
  {
    subMenu: 'Nghe Báo',
    uRL: '/home/bots',
  },
];

const NUMBER_COLUMN_SCREEN_SIZE = {
  mobile: 1,
  medium: 6,
};

const AUTHOR_DATA = {
  imageList: [
    'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/91651356_10221659159173576_3247397447923662848_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=pp_EiaNhDC0AX_EUZ74&_nc_ht=scontent.fsgn5-5.fna&oh=4e857736da7d671473062711d27258cc&oe=5F274795',
    'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/26230148_10214748987063592_8377186319034611906_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=uvu6Qu3c240AX_Osvq-&_nc_ht=scontent.fdad3-3.fna&oh=aed9cb0f661f270fe165ed60fff689e1&oe=5F2612A3',
  ],
  infor: [
    {
      name: 'Tuan Nguyen',
      description: 'CTO tại VCCORP',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Viet Cv',
      description: 'Product Owner tại CodeLearn.io',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Sơn Đức Nguyễn',
      description: 'Chairman tại Học viện Thương hiệu Plato',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Nguyen Phi Van',
      description: 'Board Advisor at Austria-Vietnam Innovation Council',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Đào Trung Thành',
      description: 'Giám đốc Kỹ thuật (CTO), MVV Group',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },

    {
      name: 'David Trieu',
      description: 'Project Director tại Hệ Sinh Thái Khởi Nghiệp IoT Việt Nam',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Lê Công Thành',
      description: 'President tại InfoRe Technology',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Truong Hoang Ly Phi',
      description: 'Vice Chairwoman tại Young Businesspeople Association of Ho Chi Minh city',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },

    {
      name: 'Thanh N. Truong',
      description: 'Phó Hiệu trưởng tại Trường Đại học Văn Lang',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Trieu Nguyen',
      description: 'Owner and Founder tại USPA.tech',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },

    {
      name: 'Minh Đào',
      description: 'Chief Ninja tại Trạm Đọc - Read Station',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Nguyễn Đức Hiển',
      description: 'Phó tổng biên tập Báo Pháp Luật TP HCM',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Linh Mạnh Nguyễn',
      description: 'Giảng dạy tại LITADO - Trường Đào Tạo Cao Cấp Digital Marketing',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Van Vu',
      description: 'Professor of Mathematics tại Yale University',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Nghia Minh Le',
      description: 'Director of Marketplace System tại Tiki',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Viet Tran',
      description: 'Từng làm Software Architect tại Sendo',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Trần Lâm',
      description: 'Co-Founder tại ATP Web',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Thanhtu Pham',
      description: 'CTO tại Agiletech Vietnam',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
    {
      name: 'Bùi Ngọc Tài',
      description: 'Associate Software Engineer tại Zalo',
      image: 'https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg',
    },
  ],
};

const AUTHOR_LIST = {
  image: [
    'https://uploads-ssl.webflow.com/5be2baf97a00671aef1118cd/5e31a33d94b1c0d5e4b58f99_belle%20buzzwords.png',
    'https://www.intheblack.com/-/media/intheblack/allimages/workplace/2016/business-buzzwords.jpg?h=476&la=en&mw=806&w=806&rev=c39bd5246fcd4ded832348c5b8b591ad',
    'https://miro.medium.com/max/3000/1*z_tMP7UnBamSyDkB1rav3Q.png',
  ],
  author: [...AUTHOR_DATA.infor],
};

const SCREEN_SIZE = {
  MOBILE: 200,
  LAPTOP: 1000,
  DESKTOP: 1500,
};

export {
  authorBrielf,
  skillGroup,
  skillDescribe,
  contentIntro,
  COOKIE_NAMES,
  REQUEST_TIMEOUT,
  TOPIC_TRANSLATE_CONTENT,
  DIALOG_CODE,
  FACEBOOK_DEV,
  DEFAULT_TOPIC,
  URL,
  NUMBER_COLUMN_SCREEN_SIZE,
  AUTHOR_LIST,
  SCREEN_SIZE,
};
