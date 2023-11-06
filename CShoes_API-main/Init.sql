-- Init Roles
INSERT INTO [dbo].[Roles] ([Name], [isAdmin]) VALUES ('User', 0) 
INSERT INTO [dbo].[Roles] ([Name], [isAdmin]) VALUES ('Admin', 1) 
GO

-- Init Users
INSERT INTO [dbo].[Users] (RoleID, Username, PasswordHash, Email) VALUES (1, 'Joe', '123456', 'Joe@gmail.com')
INSERT INTO [dbo].[Users] (RoleID, Username, PasswordHash, Email) VALUES (2, 'JoeAdmin', '123456', 'Joe@gmail.com') 
GO

SET IDENTITY_INSERT [dbo].[Brands] ON
-- Init brands
INSERT [dbo].[Brands] ([BrandID], [Name]) VALUES (1, N'Adidas')
INSERT [dbo].[Brands] ([BrandID], [Name]) VALUES (2, N'Nike')
INSERT [dbo].[Brands] ([BrandID], [Name]) VALUES (3, N'Vans')
GO