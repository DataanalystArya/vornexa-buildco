import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

actor {
  type Submission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
  };

  var nextId = 0;
  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, phone : Text, message : Text) : async () {
    let submission : Submission = {
      id = nextId;
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    submissions.add(submission);
    nextId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.toArray();
  };

  public query ({ caller }) func getSubmissionById(id : Nat) : async Submission {
    switch (submissions.toArray().find(func(s) { s.id == id })) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };
};
