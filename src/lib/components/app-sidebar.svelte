<script lang="ts">
    import Calendar from "@lucide/svelte/icons/calendar";
    import House from "@lucide/svelte/icons/house";
    import Info from "@lucide/svelte/icons/info";
    import Fingerprint from "@lucide/svelte/icons/fingerprint";
    import Cookie from "@lucide/svelte/icons/cookie";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
   
    // Menu items.
    const items = [
      {
        title: "Home",
        url: "/",
        icon: House,
      },
      {
        title: "Fingerprint",
        url: "fingerprint",
        icon: Fingerprint,
      },
      {
        title: "Why Care?",
        url: "why-care",
        icon: Info,
      },
      {
        title: "Cookies",
        url: "recommendations",
        icon: Cookie,
      },
    ];
  </script>
   
  <Sidebar.Root>
    <Sidebar.Content>
      <Sidebar.Group>
        <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            {#each items as item (item.title)}
              <Sidebar.MenuItem>
                <Sidebar.MenuButton>
                  {#snippet child({ props })}
                    <a href={item.url} {...props}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  {/snippet}
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            {/each}
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    </Sidebar.Content>
  </Sidebar.Root>

