USE [master]
GO
/****** Object:  Database [ShoeStylizeDemo]    Script Date: 26-Oct-23 12:38:05 PM ******/
CREATE DATABASE [ShoeStylizeDemo]
GO
USE [ShoeStylizeDemo]
GO
ALTER DATABASE [ShoeStylizeDemo] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ShoeStylizeDemo].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ShoeStylizeDemo] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET ARITHABORT OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ShoeStylizeDemo] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ShoeStylizeDemo] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ShoeStylizeDemo] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ShoeStylizeDemo] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ShoeStylizeDemo] SET  MULTI_USER 
GO
ALTER DATABASE [ShoeStylizeDemo] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ShoeStylizeDemo] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ShoeStylizeDemo] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ShoeStylizeDemo] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ShoeStylizeDemo] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ShoeStylizeDemo] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [ShoeStylizeDemo] SET QUERY_STORE = ON
GO
ALTER DATABASE [ShoeStylizeDemo] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [ShoeStylizeDemo]
GO
/****** Object:  Table [dbo].[Admins]    Script Date: 26-Oct-23 12:38:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admins](
	[AdminID] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](50) NOT NULL,
	[PasswordHash] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Admin] PRIMARY KEY CLUSTERED 
(
	[AdminID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BlogPosts]    Script Date: 26-Oct-23 12:38:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BlogPosts](
	[PostID] [int] NOT NULL,
	[AuthorID] [int] NOT NULL,
	[Title] [nvarchar](255) NOT NULL,
	[Contents] [nvarchar](max) NOT NULL,
	[UpdatedAt] [date] NOT NULL,
	[PublishedAt] [date] NOT NULL,
 CONSTRAINT [PK_BlogPost] PRIMARY KEY CLUSTERED 
(
	[PostID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Brands]    Script Date: 26-Oct-23 12:38:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Brands](
	[BrandID] [int] NOT NULL,
	[Name] [nvarchar](255) NULL,
 CONSTRAINT [PK_Brands] PRIMARY KEY CLUSTERED 
(
	[BrandID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 26-Oct-23 12:38:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[CustomerID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](255) NOT NULL,
	[LastName] [nvarchar](255) NOT NULL,
	[Username] [nvarchar](255) NOT NULL,
	[PasswordHash] [nvarchar](255) NOT NULL,
	[Email] [nvarchar](255) NOT NULL,
	[Gender] [char](1) NOT NULL,
	[PhoneNumber] [nvarchar](255) NOT NULL,
	[ShippingAddress] [nvarchar](255) NULL,
	[BillingAddress] [nvarchar](255) NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Designs]    Script Date: 26-Oct-23 12:38:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Designs](
	[DesignID] [int] NOT NULL,
	[Title] [nvarchar](255) NOT NULL,
	[Description] [nvarchar](255) NOT NULL,
	[Media] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK_Design] PRIMARY KEY CLUSTERED 
(
	[DesignID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 26-Oct-23 12:38:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderID] [int] NOT NULL,
	[ProductID] [int] NOT NULL,
	[CustomerID] [int] NOT NULL,
	[ServiceProviderID] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
	[OrderDate] [date] NOT NULL,
 CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PostComments]    Script Date: 26-Oct-23 12:38:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostComments](
	[CommentID] [int] NOT NULL,
	[AuthorID] [int] NOT NULL,
	[PostID] [int] NOT NULL,
	[Contents] [nvarchar](max) NOT NULL,
	[Title] [nvarchar](255) NOT NULL,
	[CreatedAt] [date] NOT NULL,
 CONSTRAINT [PK_PostComment] PRIMARY KEY CLUSTERED 
(
	[CommentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ServiceProviders]    Script Date: 26-Oct-23 12:38:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServiceProviders](
	[ServiceProviderID] [int] NOT NULL,
	[Username] [nvarchar](50) NOT NULL,
	[PasswordHash] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_ServiceProvider] PRIMARY KEY CLUSTERED 
(
	[ServiceProviderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Services]    Script Date: 26-Oct-23 12:38:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Services](
	[ServiceID] [int] NOT NULL,
	[ServiceType] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Services] PRIMARY KEY CLUSTERED 
(
	[ServiceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shoes]    Script Date: 26-Oct-23 12:38:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shoes](
	[ShoeID] [int] IDENTITY(1,1) NOT NULL,
	[BrandID] [int] NOT NULL,
	[ServiceID] [int] NOT NULL,
	[DesignID] [int] NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Model] [nvarchar](255) NOT NULL,
	[Price] [int] NOT NULL,
	[Colour] [nvarchar](30) NOT NULL,
	[Material] [nvarchar](255) NOT NULL,
	[Size] [smallint] NOT NULL,
	[Description] [nvarchar](255) NULL,
 CONSTRAINT [PK_Shoe_1] PRIMARY KEY CLUSTERED 
(
	[ShoeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Brands] ([BrandID], [Name]) VALUES (1, N'Adidas')
GO
INSERT [dbo].[Brands] ([BrandID], [Name]) VALUES (2, N'Nike')
GO
INSERT [dbo].[Brands] ([BrandID], [Name]) VALUES (3, N'Vans')
GO
SET IDENTITY_INSERT [dbo].[Customers] ON 
GO
INSERT [dbo].[Customers] ([CustomerID], [FirstName], [LastName], [Username], [PasswordHash], [Email], [Gender], [PhoneNumber], [ShippingAddress], [BillingAddress]) VALUES (3, N'John', N'Doe2', N'Joe', N'123456', N'jd@gmail.com', N'M', N'12313', NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
INSERT [dbo].[Designs] ([DesignID], [Title], [Description], [Media]) VALUES (0, N'None', N'No Design', N'/')
GO
INSERT [dbo].[Designs] ([DesignID], [Title], [Description], [Media]) VALUES (1, N'Pink Donut', N'Pink Dount', N'/')
GO
INSERT [dbo].[Designs] ([DesignID], [Title], [Description], [Media]) VALUES (2, N'312', N'awefwaefa', N'fweaawfawefweafw')
GO
INSERT [dbo].[Services] ([ServiceID], [ServiceType], [Description]) VALUES (1, N'Shoe Retail', N'Sell shoes')
GO
INSERT [dbo].[Services] ([ServiceID], [ServiceType], [Description]) VALUES (2, N'Custom Shoe Retail', N'Sell custom shoes')
GO
INSERT [dbo].[Services] ([ServiceID], [ServiceType], [Description]) VALUES (3, N'Shoe Cleaning', N'Clean shoes')
GO
INSERT [dbo].[Services] ([ServiceID], [ServiceType], [Description]) VALUES (4, N'Shoe Repair', N'Repair Shoes')
GO
SET IDENTITY_INSERT [dbo].[Shoes] ON 
GO
INSERT [dbo].[Shoes] ([ShoeID], [BrandID], [ServiceID], [DesignID], [Name], [Model], [Price], [Colour], [Material], [Size], [Description]) VALUES (3, 1, 2, 1, N'fweaf', N'123', 1, N'red', N'avwef', 123, N'dwa')
GO
SET IDENTITY_INSERT [dbo].[Shoes] OFF
GO
ALTER TABLE [dbo].[BlogPosts]  WITH CHECK ADD  CONSTRAINT [FK_BlogPost_Admin] FOREIGN KEY([AuthorID])
REFERENCES [dbo].[Admins] ([AdminID])
GO
ALTER TABLE [dbo].[BlogPosts] CHECK CONSTRAINT [FK_BlogPost_Admin]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Order_Customer] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customers] ([CustomerID])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Order_Customer]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Order_ServiceProvider] FOREIGN KEY([ServiceProviderID])
REFERENCES [dbo].[ServiceProviders] ([ServiceProviderID])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Order_ServiceProvider]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Order_Shoe] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Shoes] ([ShoeID])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Order_Shoe]
GO
ALTER TABLE [dbo].[PostComments]  WITH CHECK ADD  CONSTRAINT [FK_PostComment_BlogPost] FOREIGN KEY([PostID])
REFERENCES [dbo].[BlogPosts] ([PostID])
GO
ALTER TABLE [dbo].[PostComments] CHECK CONSTRAINT [FK_PostComment_BlogPost]
GO
ALTER TABLE [dbo].[PostComments]  WITH CHECK ADD  CONSTRAINT [FK_PostComment_Customers] FOREIGN KEY([AuthorID])
REFERENCES [dbo].[Customers] ([CustomerID])
GO
ALTER TABLE [dbo].[PostComments] CHECK CONSTRAINT [FK_PostComment_Customers]
GO
ALTER TABLE [dbo].[Shoes]  WITH CHECK ADD  CONSTRAINT [FK_Shoe_Brands] FOREIGN KEY([BrandID])
REFERENCES [dbo].[Brands] ([BrandID])
GO
ALTER TABLE [dbo].[Shoes] CHECK CONSTRAINT [FK_Shoe_Brands]
GO
ALTER TABLE [dbo].[Shoes]  WITH CHECK ADD  CONSTRAINT [FK_Shoes_Design1] FOREIGN KEY([DesignID])
REFERENCES [dbo].[Designs] ([DesignID])
GO
ALTER TABLE [dbo].[Shoes] CHECK CONSTRAINT [FK_Shoes_Design1]
GO
ALTER TABLE [dbo].[Shoes]  WITH CHECK ADD  CONSTRAINT [FK_Shoes_Services] FOREIGN KEY([ServiceID])
REFERENCES [dbo].[Services] ([ServiceID])
GO
ALTER TABLE [dbo].[Shoes] CHECK CONSTRAINT [FK_Shoes_Services]
GO
USE [master]
GO
ALTER DATABASE [ShoeStylizeDemo] SET  READ_WRITE 
GO
