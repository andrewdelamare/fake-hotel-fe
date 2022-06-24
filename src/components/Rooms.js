import { RoomHero } from "./RoomHero";
const Rooms = () => {
  return (
    <div className="flex flex-col self-center mx-4 mt-[96px]">
      <RoomHero
        title="Small Room"
        desc="A small room, perfect for one person looking for a relaxing getaway"
        img="/images/smRm/point3d-commercial-imaging-ltd-ehTnhW_PhdM-unsplash.jpg"
        link="/book/sm"
        key="1"
      />
      <RoomHero
        title="Standard room"
        desc="Our standard room, an excelent choice for an individual looking for a bit more space, or a couple "
        img="/images/mdRm/dada_design-YmtlGsmTcgk-unsplash.jpg"
        link="/book/base"
        key="2"
      />
      <RoomHero
        title="Medium room"
        desc="A bit more roomy than our standard room, with space for up to four, this room is perfect for a couple or small family."
        img="/images/mdRm/dada_design-40AxEHNrY2c-unsplash.jpg"
        link="/book/md"
        key="3"
      />
      <RoomHero
        title="Large room"
        desc="Our largest room, with plenty of space for the whole family."
        img="/images/lgRm/dada_design-KDPmuv6yFDI-unsplash.jpg"
        link="/book/lg"
        key="4"
      />
    </div>
  );
};

export default Rooms;
