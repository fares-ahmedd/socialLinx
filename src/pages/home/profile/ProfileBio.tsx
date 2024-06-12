type Props = {
  bio: string;
};

function ProfileBio({ bio }: Props) {
  return (
    <div className="mt-6">
      <h4 className="text-3xl border-b pb-2">bio</h4>
      <p className="mt-4">{bio}</p>
    </div>
  );
}

export default ProfileBio;
