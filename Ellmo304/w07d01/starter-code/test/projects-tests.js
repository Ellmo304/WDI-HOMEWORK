process.env.NODE_ENV = "test";

const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

const User = require("../models/user");
const Project = require("../models/project");


//projects indez

describe("GET /projects", () => {

  before((done) => {
    Project.collection.drop();
    Project.create({
      title: "GA's fantastic adventure project",
      github: "https://github.com/username/fantastic-adventure",
      url: "http://fantastic-adventure.herokuapp.com/",
      users: ["5820a9a08686353502d458b7", "5820a9a08686353502d458b8", "5820a9a08686353502d458b9", "5820a9a08686353502d458ba"]
    }, done);
  });

  it("should return a 200 response", (done) => {
    api.get("/projects")
      .set("Accept", "application/json")
      .expect(200, done);
  });

  it("should return an array", (done) => {
    api.get("/projects")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body).to.be.an("array");
        done();
    });
  });
  it("should return correctly formed data", (done) => {
    api.get("/projects")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body[0]).to.have.property("title");
        expect(res.body[0]).to.have.property("github");
        expect(res.body[0]).to.have.property("url");
        expect(res.body[0]).to.have.property("users");
        done();
      });
  });
});

// projects create

describe("POST /projects", () => {

  beforeEach(done => {
    Project.collection.drop();
    done();
  });

  it("should return a 201 response", (done) => {
    api.post("/projects")
      .set("Accept", "application/json")
      .send({
        title: "GA's fantastic adventure project",
        github: "https://github.com/username/fantastic-adventure",
        url: "http://fantastic-adventure.herokuapp.com/",
        users: ["5820a9a08686353502d458b7", "5820a9a08686353502d458b8", "5820a9a08686353502d458b9", "5820a9a08686353502d458ba"]
      })
      .expect(201, done);
  });

  it("should return an object", (done) => {
    api.post("/projects")
    .set("Accept", "application/json")
    .send({
      title: "GA's fantastic adventure project",
      github: "https://github.com/username/fantastic-adventure",
      url: "http://fantastic-adventure.herokuapp.com/",
      users: ["5820a9a08686353502d458b7", "5820a9a08686353502d458b8", "5820a9a08686353502d458b9", "5820a9a08686353502d458ba"]
    })
    .end((err, res) => {
      expect(res.body).to.be.an("object");
      done();
    });
  });

  it("should return correctly formedd data", (done) => {
    api.post("/projects")
    .set("Accept", "application/json")
    .send({
      title: "GA's fantastic adventure project",
      github: "https://github.com/username/fantastic-adventure",
      url: "http://fantastic-adventure.herokuapp.com/",
      users: ["5820a9a08686353502d458b7", "5820a9a08686353502d458b8", "5820a9a08686353502d458b9", "5820a9a08686353502d458ba"]
    })
    .end((err, res) => {
      expect(res.body).to.have.property("title");
      expect(res.body).to.have.property("github");
      expect(res.body).to.have.property("url");
      expect(res.body).to.have.property("users");
      done();
    });
  });
});

//projects show

describe("GET /projects/:id", () => {
  let projectId = null;

  before(done => {
    Project.collection.drop();
    Project.create({
      title: "GA's fantastic adventure project",
      github: "https://github.com/username/fantastic-adventure",
      url: "http://fantastic-adventure.herokuapp.com/",
      users: ["5820a9a08686353502d458b7", "5820a9a08686353502d458b8", "5820a9a08686353502d458b9", "5820a9a08686353502d458ba"]
    }, (err, project) => {
      projectId = project._id;
      done();
    });
  });

  it("should return a 200 response", (done) => {
    api.get(`/projects/${projectId}`)
    .set("Accept", "application/json")
    .expect(200, done);
  });

  it("should return an object", (done) => {
    api.get(`/projects/${projectId}`)
    .set("Accept", "application/json")
    .end((err, res) => {
      expect(res.body).to.be.an("object");
      done();
    });
  });

  it("should return correctly formed data", (done) => {
    api.get(`/projects/${projectId}`)
    .set("Accept", "application/json")
    .end((err, res) => {
      expect(res.body).to.have.property("title");
      expect(res.body).to.have.property("github");
      expect(res.body).to.have.property("url");
      expect(res.body).to.have.property("users");
      done();
    });
  });
});

//projects update

describe("PUT /projects/:id", () => {
  beforeEach(done =>{
    Project.collection.drop();
    Project.create({
      title: "GA's fantastic adventure project",
      github: "https://github.com/username/fantastic-adventure",
      url: "http://fantastic-adventure.herokuapp.com/",
      users: ["5820a9a08686353502d458b7", "5820a9a08686353502d458b8", "5820a9a08686353502d458b9", "5820a9a08686353502d458ba"]
    }, (err, project) => {
      projectId = project._id;
      done();
    });
  });

  it("should return a 200 response", (done) => {
    api.put(`/projects/${projectId}`)
    .set("Accept", "application/json")
    .send({
      title: "Hilarious Project",
      github: "https://github.com/username/hilarious-project",
      url: "http://hilarious-project.herokuapp.com/",
      users: ["5820a9a08686353502d458b7", "5820a9a08686353502d458b8", "5820a9a08686353502d458b9", "5820a9a08686353502d458ba"]
    })
    .expect(200, done);
  });

  it("should return an object", (done) => {
    api.put(`/projects/${projectId}`)
    .set("Accept", "application/json")
    .send({
      title: "Hilarious Project",
      github: "https://github.com/username/hilarious-project",
      url: "http://hilarious-project.herokuapp.com/",
      users: ["5820a9a08686353502d458b7", "5820a9a08686353502d458b8", "5820a9a08686353502d458b9", "5820a9a08686353502d458ba"]
    })
    .end((err, res) => {
      expect(res.body).to.be.an("object");
      done();
    });
  });

//   it("should return correctly formed data", (done) => {
//     api.put(`/projects/${projectId}`)
//     .set("Accept", "application/json")
//     .send({
//       title: "Hilarious Project",
//       github: "https://github.com/username/hilarious-project",
//       url: "http://hilarious-project.herokuapp.com/",
//       users: ["5820a9a08686353502d458b7", "5820a9a08686353502d458b8", "5820a9a08686353502d458b9", "5820a9a08686353502d458ba"]
//     })
//     .end((err, res) => {
//       expect(res.body.title).to.equal("Hilarious Project");
//       expect(res.body.github).to.equal("https://github.com/username/hilarious-project");
//       expect(res.body.url).to.equal("http://hilarious-project.herokuapp.com/");
//       expect(res.body.users).to.equal(["5820a9a08686353502d458b7", "5820a9a08686353502d458b8", "5820a9a08686353502d458b9", "5820a9a08686353502d458ba"]);
//       done();
//     });
//   });
});

//projects delete

describe("DELETE /projects/:id", () => {
  beforeEach(done =>{
    Project.collection.drop();
    Project.create({
      title: "GA's fantastic adventure project",
      github: "https://github.com/username/fantastic-adventure",
      url: "http://fantastic-adventure.herokuapp.com/",
      users: ["5820a9a08686353502d458b7", "5820a9a08686353502d458b8", "5820a9a08686353502d458b9", "5820a9a08686353502d458ba"]
    }, (err, project) => {
      projectId = project._id;
      done();
    });
  });
  it("should return a 204 response", (done) => {
    api.delete(`/projects/${projectId}`)
    .set("Accept", "application/json")
    .expect(204, done);
  });

  it("should have actually deleted the project", (done) => {
    api.delete(`/projects/${projectId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        Project.find((err, projects) => {
          expect(projects.length).to.equal(0);
          done();
        });
    });
  });
});
