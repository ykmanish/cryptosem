// app/page.jsx or pages/index.jsx
export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">
        Enterprise Network Topology – VLAN, VTP, SSH, OSPF
      </h1>

      {/* TOPOLOGY DIAGRAM */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Topology diagram</h2>
        <pre className="whitespace-pre bg-slate-800 p-4 rounded border border-slate-700 text-sm overflow-x-auto">
{`
              [PC-HR]        [PC-Fin]        [PC-IT]
                |               |              |
              Fa0/2          Fa0/3           Fa0/4
                 \\             |             /
                  \\            |            /
                   \\           |           /
                    +---------------------+
                    |   Access-SW1       |
                    | VLAN 10/20/30     |
                    +---------+----------+
                              | Fa0/24 (trunk)
                              | 802.1Q, VLAN 10,20,30
                    +---------+----------+
                    |   Access-SW2       |
                    | VTP Client        |
                    +----+----------+---+
                         |          |
                     Fa0/1        Fa0/2
                       |            |
                    [Router-1]   [Router-2]
                         \\        /
                          \\      /
                           [Router-3]
                             |
                           [ISP/Cloud] (optional)
`}
        </pre>
        <p className="mt-2 text-sm">
          Diagram is **logical** only; in Packet Tracer connect with copper straight‑through cables from PCs to switch access ports, between switches, and from switches to routers.
        </p>
      </section>

      {/* CABLES TABLE */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Cables and ports</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-800">
              <th className="border border-slate-700 px-2 py-1 text-left">
                From
              </th>
              <th className="border border-slate-700 px-2 py-1 text-left">
                To
              </th>
              <th className="border border-slate-700 px-2 py-1 text-left">
                Cable type
              </th>
              <th className="border border-slate-700 px-2 py-1 text-left">
                Reason
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 px-2 py-1">
                PC‑HR (NIC)
              </td>
              <td className="border border-slate-700 px-2 py-1">
                SW1 Fa0/2
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Copper straight‑through
              </td>
              <td className="border border-slate-700 px-2 py-1">
                PC to switch access port
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-2 py-1">
                PC‑Finance (NIC)
              </td>
              <td className="border border-slate-700 px-2 py-1">
                SW1 Fa0/3
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Copper straight‑through
              </td>
              <td className="border border-slate-700 px-2 py-1">
                PC to switch access port
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-2 py-1">
                PC‑IT (NIC)
              </td>
              <td className="border border-slate-700 px-2 py-1">
                SW1 Fa0/4
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Copper straight‑through
              </td>
              <td className="border border-slate-700 px-2 py-1">
                PC to switch access port
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-2 py-1">
                SW1 Fa0/24
              </td>
              <td className="border border-slate-700 px-2 py-1">
                SW2 Fa0/24
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Copper straight‑through
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Switch to switch trunk
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-2 py-1">
                SW2 Fa0/1
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Router‑1 G0/0
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Copper straight‑through
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Switch to router
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-2 py-1">
                SW2 Fa0/2
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Router‑2 G0/0
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Copper straight‑through
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Switch to router
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-2 py-1">
                Router‑1 G0/1
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Router‑3 G0/0
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Serial or copper (any point‑to‑point)
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Router link for OSPF Area 0
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-2 py-1">
                Router‑2 G0/1
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Router‑3 G0/1
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Serial or copper (any point‑to‑point)
              </td>
              <td className="border border-slate-700 px-2 py-1">
                Router link for OSPF Area 1
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* VLAN + VTP CONFIG */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. VLAN and VTP configuration (Switches)
        </h2>
        <p className="text-sm mb-2">
          Step order trick: think <span className="font-semibold">"VLANs → VTP → Trunks → Access ports"</span>.
          Always create VLANs on the VTP server first so they propagate to the client.
        </p>
        <h3 className="font-semibold mt-2 mb-1 text-base">3.1 SW1 – VTP Server</h3>
        <pre className="whitespace-pre bg-slate-800 p-4 rounded border border-slate-700 text-xs overflow-x-auto">
{`
enable
configure terminal
hostname SW1

! VTP as server
vtp mode server
vtp domain ENTERPRISE
vtp password vtp@123
vtp version 2

! Create VLANs
vlan 10
 name HR
vlan 20
 name FINANCE
vlan 30
 name IT
exit

! Access ports for PCs
interface fa0/2
 switchport mode access
 switchport access vlan 10
interface fa0/3
 switchport mode access
 switchport access vlan 20
interface fa0/4
 switchport mode access
 switchport access vlan 30

! Trunk towards SW2
interface fa0/24
 switchport trunk encapsulation dot1q
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30

! Management SVI for SSH (example IP)
interface vlan 10
 ip address 192.168.10.2 255.255.255.0
 no shutdown
ip default-gateway 192.168.10.1

end
write memory
`}
        </pre>

        <h3 className="font-semibold mt-4 mb-1 text-base">
          3.2 SW2 – VTP Client
        </h3>
        <pre className="whitespace-pre bg-slate-800 p-4 rounded border border-slate-700 text-xs overflow-x-auto">
{`
enable
configure terminal
hostname SW2

vtp mode client
vtp domain ENTERPRISE
vtp password vtp@123
vtp version 2

! Trunk from SW1
interface fa0/24
 switchport trunk encapsulation dot1q
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30

! Uplink to routers as trunk (router-on-a-stick if needed)
interface fa0/1
 switchport mode trunk
 switchport trunk encapsulation dot1q
 switchport trunk allowed vlan 10,20,30
interface fa0/2
 switchport mode trunk
 switchport trunk encapsulation dot1q
 switchport trunk allowed vlan 10,20,30

! Optional management SVI
interface vlan 10
 ip address 192.168.10.3 255.255.255.0
 no shutdown
ip default-gateway 192.168.10.1

end
write memory
`}
        </pre>
      </section>

      {/* SSH CONFIG */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          4. Secure device management using SSH
        </h2>
        <p className="text-sm mb-2">
          Memory trick: on each switch think <span className="font-semibold">"name → domain → crypto key → SSH v2 → user → vty lines"</span>.
        </p>

        <h3 className="font-semibold mt-2 mb-1 text-base">
          4.1 Apply on both SW1 and SW2
        </h3>
        <pre className="whitespace-pre bg-slate-800 p-4 rounded border border-slate-700 text-xs overflow-x-auto">
{`
enable
configure terminal
hostname SW1   ! or SW2 (already done but keep order in mind)
ip domain-name enterprise.local

! RSA key for SSH
crypto key generate rsa
 1024

ip ssh version 2

username admin secret cisco@123

line vty 0 4
 transport input ssh
 login local
line console 0
 login local
end
write memory
`}
        </pre>
      </section>

      {/* OSPF CONFIG */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. OSPF dynamic routing</h2>
        <p className="text-sm mb-2">
          Paper asks for OSPF ID 1 with Area 0 as Branch network 1 and Area 1 as Branch network 2.
          Trick phrase: <span className="font-semibold">"router ospf 1 → network → area"</span>.
        </p>

        <p className="text-sm mb-1">
          Sample IP plan (you can adjust but keep areas same):
        </p>
        <ul className="list-disc list-inside text-sm mb-2">
          <li>VLAN 10 (HR): 192.168.10.0 /24 – gateway 192.168.10.1</li>
          <li>VLAN 20 (Finance): 192.168.20.0 /24 – gateway 192.168.20.1</li>
          <li>VLAN 30 (IT): 192.168.30.0 /24 – gateway 192.168.30.1</li>
          <li>R1–R3 link: 10.0.0.0 /30 (Area 0)</li>
          <li>R2–R3 link: 10.0.0.4 /30 (Area 1)</li>
        </ul>

        <h3 className="font-semibold mt-2 mb-1 text-base">
          5.1 Router‑on‑a‑Stick – Router‑1 (Branch 1 gateway, Area 0)
        </h3>
        <pre className="whitespace-pre bg-slate-800 p-4 rounded border border-slate-700 text-xs overflow-x-auto">
{`
enable
configure terminal
hostname R1

! Subinterfaces towards VLANs (connected to SW2 Fa0/1 trunk)
interface g0/0.10
 encapsulation dot1q 10
 ip address 192.168.10.1 255.255.255.0
interface g0/0.20
 encapsulation dot1q 20
 ip address 192.168.20.1 255.255.255.0
interface g0/0.30
 encapsulation dot1q 30
 ip address 192.168.30.1 255.255.255.0
no shutdown

! Link to Router-3
interface g0/1
 ip address 10.0.0.1 255.255.255.252
 no shutdown

! OSPF Area 0
router ospf 1
 network 192.168.10.0 0.0.0.255 area 0
 network 192.168.20.0 0.0.0.255 area 0
 network 192.168.30.0 0.0.0.255 area 0
 network 10.0.0.0 0.0.0.3 area 0
end
write memory
`}
        </pre>

        <h3 className="font-semibold mt-4 mb-1 text-base">
          5.2 Router‑2 (Branch 2 gateway, Area 1 – if needed, use extra VLANs or another LAN)
        </h3>
        <pre className="whitespace-pre bg-slate-800 p-4 rounded border border-slate-700 text-xs overflow-x-auto">
{`
enable
configure terminal
hostname R2

! Example single LAN in Branch 2
interface g0/0
 ip address 192.168.40.1 255.255.255.0
 no shutdown

interface g0/1
 ip address 10.0.0.5 255.255.255.252
 no shutdown

router ospf 1
 network 192.168.40.0 0.0.0.255 area 1
 network 10.0.0.4 0.0.0.3 area 1
end
write memory
`}
        </pre>

        <h3 className="font-semibold mt-4 mb-1 text-base">
          5.3 Router‑3 (Backbone between areas 0 and 1)
        </h3>
        <pre className="whitespace-pre bg-slate-800 p-4 rounded border border-slate-700 text-xs overflow-x-auto">
{`
enable
configure terminal
hostname R3

interface g0/0
 ip address 10.0.0.2 255.255.255.252
 no shutdown

interface g0/1
 ip address 10.0.0.6 255.255.255.252
 no shutdown

router ospf 1
 network 10.0.0.0 0.0.0.3 area 0
 network 10.0.0.4 0.0.0.3 area 1
end
write memory
`}
        </pre>
      </section>

      {/* VERIFICATION + TRICKS */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          6. Verification commands and memory trick
        </h2>
        <p className="text-sm mb-2">
          Final trick phrase: <span className="font-semibold">"show vlan, show vtp, show interfaces trunk, show ip ospf neighbor, ping"</span>.
          If all of them look correct, the lab is done.
        </p>
        <pre className="whitespace-pre bg-slate-800 p-4 rounded border border-slate-700 text-xs overflow-x-auto">
{`
On switches:
 show vlan brief
 show vtp status
 show interfaces trunk
 show ip interface brief
 show running-config | section vty

On routers:
 show ip interface brief
 show ip route
 show ip ospf neighbor
 show ip ospf interface

From PCs:
 ping between PCs in different VLANs (e.g., 192.168.10.x -> 192.168.20.x)

If ping fails:
 1. Check VLAN membership
 2. Check trunk allowed VLAN list
 3. Check router subinterfaces and IPs
 4. Check OSPF networks and areas
`}
        </pre>
      </section>
    </main>
  );
}
