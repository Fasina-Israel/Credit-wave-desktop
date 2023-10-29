// assets
import {
  HomeOutlined,
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  FileTextOutlined,
  FileProtectOutlined,
  UserOutlined,
  SettingOutlined,
  MobileOutlined,
  TeamOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  HomeOutlined,
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  FileTextOutlined,
  FileProtectOutlined,
  UserOutlined,
  SettingOutlined,
  MobileOutlined,
  TeamOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: "utilities",
  title: "",
  type: "group",
  children: [
    {
      id: "util-typography",
      title: "Dashboard",
      type: "item",
      url: "/dashboard",
      icon: icons.HomeOutlined,
    },
    {
      id: "util-color",
      title: "Loan Application",
      type: "item",
      url: "/dashboard",
      icon: icons.FileTextOutlined,
    },
    {
      id: "util-shadow",
      title: "Loan Underwriting",
      type: "item",
      url: "/dashboard",
      icon: icons.BarcodeOutlined,
    },
    {
      id: "ant-icons",
      title: "Collection",
      type: "item",
      url: "/dashboard",
      icon: icons.FileTextOutlined,
      breadcrumbs: false,
    },
    {
      id: "ant-icons2",
      title: "CRW",
      type: "item",
      url: "/dashboard",
      icon: icons.TeamOutlined,
      breadcrumbs: false,
    },
    {
      id: "ant-icons3",
      title: "Administration",
      type: "item",
      url: "/dashboard",
      icon: icons.UserOutlined,
      breadcrumbs: false,
    },
    {
      id: "ant-icons8",
      title: "Debt Managemant",
      type: "item",
      url: "/dashboard",
      icon: icons.AntDesignOutlined,
      breadcrumbs: false,
    },
    {
      id: "ant-icons4",
      title: "Bridge Loan",
      type: "item",
      url: "/dashboard",
      icon: icons.AntDesignOutlined,
      breadcrumbs: false,
    },
    {
      id: "ant-icons5",
      title: "Mobile App",
      type: "item",
      url: "/dashboard",
      icon: icons.MobileOutlined,
      breadcrumbs: false,
    },
    {
      id: "ant-icons6",
      title: "General Setup",
      type: "item",
      url: "/dashboard",
      icon: icons.SettingOutlined,
      breadcrumbs: false,
    },
    {
      id: "ant-icons7",
      title: "Report",
      type: "item",
      url: "/dashboard",
      icon: icons.FileTextOutlined,
      breadcrumbs: false,
    },
  ],
};

export default utilities;
