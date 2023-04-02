import { Button, Navbar, Paper, Stack, Title, Text } from "@mantine/core";
import {
  BrandCampaignmonitor,
  Calendar,
  Dashboard,
  Help,
  Logout,
  Message,
  Settings,
} from "tabler-icons-react";

export default function Sidebar() {
  return (
    <Navbar bg={"#131313"} w={260}>
      <Navbar.Section>
        <Title order={1}>Reaply</Title>
      </Navbar.Section>

      <Navbar.Section>
        <Stack align={"center"}>
          <Button leftIcon={<Dashboard />} variant="subtle">
            Dashboard
          </Button>
          <Button leftIcon={<Message />} variant="subtle">
            Messages
          </Button>
          <Button leftIcon={<Calendar />} variant="subtle">
            Calender
          </Button>
          <Button leftIcon={<BrandCampaignmonitor />} variant="subtle">
            Campigns
          </Button>
        </Stack>
      </Navbar.Section>

      <Navbar.Section>
        <Stack align={"center"}>
          <Button leftIcon={<Settings />} variant="subtle">
            Settings
          </Button>
          <Button leftIcon={<Help />} variant="subtle">
            Help?
          </Button>
        </Stack>
      </Navbar.Section>

      <Navbar.Section px={"30"}>
        <Paper p="md" radius={"lg"} bg="dark" withBorder mx={30}>
          <Text color={"#f8f8f8"}>
            Your free trial is about to end in <span>10 days</span>
          </Text>
          <Stack>
            <Text>You will not be billed during your free trial.</Text>
            <Text>
              To keep your projects running after the trial end, upgrade to a
              paid option.
            </Text>
          </Stack>

          <Button>Upgrade</Button>
        </Paper>
      </Navbar.Section>

      <Navbar.Section>
        <Button leftIcon={<Logout />} variant="subtle">
          Logout
        </Button>
      </Navbar.Section>
    </Navbar>
  );
}
