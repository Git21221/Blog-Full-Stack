import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId)
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client)
  }

  async createPost({ title, slug, content, "featured-image": featuredImage, status, "user-id": userId, userName, userLabel }) {
    try {
      return await this.databases.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          'featured-image':featuredImage,
          status,
          "user-id": userId,
          userName,
          userLabel,
        }
      )
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, "featured-image":featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          'featured-image':featuredImage,
          status,
        }
      )
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost( slug ) {
    try {
      await this.databases.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      )
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPost( slug ) {
    try {
      return await this.databases.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      )
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getAllPost() {
    try {
      return await this.databases.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        [
          Query.equal("status", ["active"])
        ]
      )
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  //file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log("Appwrite service :: uploadfile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        config.appWriteBucketId,
        fileId
      )
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      config.appWriteBucketId,
      fileId
    )
  }
}

const service = new Service();
export default service;