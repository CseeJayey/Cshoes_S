-- Init Roles
GO
INSERT INTO [dbo].[Roles] ([Name], [isAdmin]) VALUES ('User', 0)

GO
INSERT INTO [dbo].[Roles] ([Name], [isAdmin]) VALUES ('Admin', 1)

-- Init Users
GO
INSERT INTO [dbo].[Users] (RoleID, Username, PasswordHash, Email) VALUES (1, 'Joe', '123456', 'Joe@gmail.com');
GO
INSERT INTO [dbo].[Users] (RoleID, Username, PasswordHash, Email) VALUES (2, 'JoeAdmin', '123456', 'Joe@gmail.com');

-- Init brands

GO
INSERT [dbo].[Brands] ([BrandID], [Name]) VALUES (1, N'Adidas')
GO
INSERT [dbo].[Brands] ([BrandID], [Name]) VALUES (2, N'Nike')
GO
INSERT [dbo].[Brands] ([BrandID], [Name]) VALUES (3, N'Vans')